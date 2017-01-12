var lastMove;
var kingWhite = 85;
var kingBlack = 15;
var enP = NaN;
var castle = false;

var enPassant = function(p) {
  if (board[p][1] === 'B') {
    if (lastMove && board[lastMove[1]] && board[lastMove[1]][0] === 'P' && Math.abs(lastMove[1]-p) === 1 && lastMove[1] - lastMove[0] === -20) {
      enP = lastMove[1];
      return lastMove[1] + 10;
    }
  } else if (board[p][1] === 'W') {
    if (lastMove && board[lastMove[1]] && board[lastMove[1]][0] === 'P' && Math.abs(lastMove[1]-p) === 1 && lastMove[1] - lastMove[0] === 20) {
      enP = lastMove[1];
      return lastMove[1] - 10;
    }
  }
}

var clear = function(x1, x2) {
  for (var i = x1; i < x2; i++) {
    if (board[i] !== null) {
      return false;
    }
  }
  return true;
}

var castling = function(p) {
  var res = [];
  if (board[p][2]) {
    if (board[p+3][2] && clear(p+1, p+3)) {
      res.push(p+3);
    }
    if (board[p-4][2] && clear(p-3, p)) {
      res.push(p-4);
    }
  }
  return res;
}

var generateMoves = function(p, l, n) {
  var res = [];
  for (var i = 0; i < l.length; i++) {
    for (var j = 1; j < n; j++) {
      if (board[p+(j*l[i])] === null) {
        res.push(p+(j*l[i]));
      } else {
        if (!samePlayer(p, p+(j*l[i]))) {
          res.push(p+(j*l[i]));
        }
        break;
      }
    }
  }
  for (var i = 0; i < l.length; i++) {
    for (var j = 1; j < n; j++) {
      if (board[p-(j*l[i])] === null) {
        res.push(p-(j*l[i]));
      } else {
        if (!samePlayer(p, p-(j*l[i]))) {
          res.push(p-(j*l[i]));
        }
        break;
      }
    }
  }
  return res;
}

var possibleMoves = {
  P: function(p) {
    var res = [];
    if (board[p][1] === 'B') {
      if (board[p][2] && board[p+20] === null) {
        res.push(p+20);
      }
      if (board[p+10] === null) {
        res.push(p+10);
      }
      if (board[p+9] && board[p+9][1] === 'W') {
        res.push(p+9);
      }
      if (board[p+11] && board[p+11][1] === 'W') {
        res.push(p+11);
      }
    } else if (board[p][1] === 'W') {
      if (board[p][2] && board[p-20] === null) {
        res.push(p-20);
      }
      if (board[p-10] === null) {
        res.push(p-10);
      }
      if (board[p-9] && board[p-9][1] === 'B') {
        res.push(p-9);
      }
      if (board[p-11] && board[p-11][1] === 'B') {
        res.push(p-11);
      }
    }
    res.push(enPassant(p));
    return res;
  },
  R: function(p) {
    return generateMoves(p, [1, 10], 9);
  },
  B: function(p) {
    return generateMoves(p, [9, 11], 9);
  },
  Q: function(p) {
    return generateMoves(p, [1, 9, 10, 11], 9);
  },
  N: function(p) {
    return generateMoves(p, [8, 12, 19, 21], 2);
  },
  K: function(p) {
    var res = generateMoves(p, [1, 9, 10, 11], 2);
    res = res.concat(castling(p));
    return res;
  }
}

var samePlayer = function(p1, p2) {
  if (board[p1] && board[p2]) {
    return board[p1][1] === board[p2][1];
  }
}

var promote = function(p) {
  var rank = prompt("'Q' to Queen; 'R' to Rook; 'B' to Bishop; 'N' to Knight; 'P' to remain.");
  var curRank = board[p];
  board[p][0] = rank;
}

var move = function(p1, p2) {
  var p1 = parseInt(p1);
  var p2 = parseInt(p2);
  // generate all the possible moves
  var valid_moves = possibleMoves[board[p1][0]](p1);
  if (board[p1] !== null && valid_moves.indexOf(p2) !== -1 && !samePlayer(p1, p2)) {
    lastMove = [p1, p2];
    if (board[p1][0] === 'K') {
      kingPos(p1, p2);
    }
    if (board[p2] === null) {
      board[p2] = board[p1];
      board[p1] = null;
      if (enP) {
        board[enP] = null;
      }
    } else if (!samePlayer(p1, p2)) {
      board[p2] = board[p1]
      board[p1] = null;
    }
    if (board[p2][0] === 'P' && (p2 > 80 || p2 < 20)) {
      promote(p2);
    }
    board[p2][2] = false;
    return true;
  } else if (board[p1][0] === 'K') {
    if (valid_moves.indexOf(p2) !== -1 && board[p2][0] === 'R' && board[p1][2]) {
      castle = true;
      lastMove = [p1, p2];
      if (p2 > p1) {
        board[p1+1] = [board[p2][0], board[p2][1], false];
        board[p2-1] = [board[p1][0], board[p1][1], false];
        kingPos(p1, p2-1);
      } else {
        board[p1-1] = [board[p2][0], board[p2][1], false];
        board[p2+2] = [board[p1][0], board[p1][1], false];
        kingPos(p1, p2+2);
      }
      board[p1] = null;
      board[p2] = null;
      return true;
    }
  }
  return false;
}

var kingPos = function(p1, p2) {
  board[p1][1] === 'B' ? kingBlack = p2: kingWhite = p2;
}

var board = {
  11: ['R', 'B', true], 12: ['B', 'B', true], 13: ['N', 'B', true], 14: ['Q', 'B', true], 15: ['K', 'B', true], 16: ['N', 'B', true], 17: ['B', 'B', true], 18: ['R', 'B', true],
  21: ['P', 'B', true], 22: ['P', 'B', true], 23: ['P', 'B', true], 24: ['P', 'B', true], 25: ['P', 'B', true], 26: ['P', 'B', true], 27: ['P', 'B', true], 28: ['P', 'B', true],
  31: null, 32: null, 33: null, 34: null, 35: null, 36: null, 37: null, 38: null,
  41: null, 42: null, 43: null, 44: null, 45: null, 46: null, 47: null, 48: null,
  51: null, 52: null, 53: null, 54: null, 55: null, 56: null, 57: null, 58: null,
  61: null, 62: null, 63: null, 64: null, 65: null, 66: null, 67: null, 68: null,
  71: ['P', 'W', true], 72: ['P', 'W', true], 73: ['P', 'W', true], 74: ['P', 'W', true], 75: ['P', 'W', true], 76: ['P', 'W', true], 77: ['P', 'W', true], 78: ['P', 'W', true],
  81: ['R', 'W', true], 82: ['B', 'W', true], 83: ['N', 'W', true], 84: ['Q', 'W', true], 85: ['K', 'W', true], 86: ['N', 'W', true], 87: ['B', 'W', true], 88: ['R', 'W', true] };

var check = function() {
  for (var p in board) {
    if (board[p] !== null) {
      if (board[p][1] === 'B') {
        var valid_moves_b = possibleMoves[board[p][0]](parseInt(p));
        if (valid_moves_b.indexOf(kingWhite) !== -1) {
          $('#'+p).addClass('check');
        }
      } else {
        var valid_moves_w = possibleMoves[board[p][0]](parseInt(p));
        if (valid_moves_w.indexOf(kingBlack) !== -1) {
          $('#'+p).addClass('check');
        }
      }
    }
  }
}

var init = function() {
  for (var k in board) {
    if (board[k]) {
      $('#' + k).addClass(board[k][0]);
      if (board[k][1] === 'B') {
        $('#' + k).addClass('player1');
      } else {
        $('#' + k).addClass('player0');
      }
    }
  }
}

var click = 1;
var p1 = null;
var cur = 0;

$('.box').on('click', function() {
  if (click === 1) {
    if (board[$(this).attr('id')] && $(this).hasClass('player'+cur)) {
      $(this).addClass('select');
      p1 = parseInt($(this).attr('id'));
      click++;
    }
  } else if (click === 2) {
    var p2 = parseInt($(this).attr('id'));
    var rank1 = board[p1][0];
    var rank2 = board[$(this).attr('id')] ? board[$(this).attr('id')][0]: null;
    $('.box').removeClass('select check');
    if (p1 === p2) {
      click = 1;
      p1 = null;
    } else if (move(p1, p2)) {
      if (enP) {
        $('#'+enP).removeClass('P player'+(1-cur));
        enP = NaN;
      }
      if (rank2 === 'K' && board[p2][0] !== 'K') {
         $('#board').fadeOut(1000).fadeIn(1000);
         $('.box').off();
      }
      if (castle) {
        castle = false;
        $('#'+p1).removeClass('K player'+cur);
        $('#'+p2).removeClass('R player'+cur);
        if (p2 > p1) {
          $('#'+(p1+1)).addClass('R player'+cur);
          $('#'+(p2-1)).addClass('K player'+cur);
        } else {
          $('#'+(p1-1)).addClass('R player'+cur);
          $('#'+(p2+2)).addClass('K player'+cur);
        }
      } else {
        $('#'+p1).removeClass(rank1+' player'+cur);
        $('#'+p2).removeClass(rank2+' player'+(1-cur)).addClass(board[p2][0]+' player'+cur);
      }
      click = 1;
      cur = 1 - cur;
      check();
      p1 = null;
    }
  }
});

init();
