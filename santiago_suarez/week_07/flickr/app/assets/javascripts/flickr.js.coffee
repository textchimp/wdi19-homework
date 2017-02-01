class window.Flickr
  constructor: (form) ->
    @form = $ form
    @query = @form.find('#query')
    @spinner = $(".loading-more-images")
    @form.on 'submit', @_makeRequest

  _makeRequest: (e) =>
    return if window.isLoadingNextPage
    window.isLoadingNextPage = true
    @spinner.removeClass("hidden")
    e.preventDefault() if e
    @page ||= 1

    url = "https://api.flickr.com/services/rest/?page=#{@page}&jsoncallback=?"
    opts = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: @query.val(),
      format: 'json',
    }

    $.getJSON url, opts
    .then (data) =>
      console.log data
      @page++
      _.each data.photos.photo, (photo) =>
        @_populateImgFields(photo)
    .then () =>
      @spinner.addClass("hidden")
      window.isLoadingNextPage = false

  _populateImgFields: (photo) =>
    $('#images').append("<img src='http://farm#{photo.farm}.static.flickr.com/#{photo.server}/#{photo.id}_#{photo.secret}_q.jpg'>")

$(document).on "ready", ->
  window.isLoadingNextPage = false
  infiniteScroll = new Flickr('form#search')
  infiniteScroll

  $(window).on "scroll", =>
    if $(window).scrollTop() + $(window).height() == $(document).height()
      infiniteScroll._makeRequest()
