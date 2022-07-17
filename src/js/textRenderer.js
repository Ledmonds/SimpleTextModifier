$('#form').submit(function (evt) {
    evt.preventDefault();
    
    var element = $('#renderOutput')
    element.empty();
    element.append(generateRenderableText());
});

function generateRenderableText()
{
    var text = $('#text').val();
    var repeats = $('#repeats').val();
    var startSize = parseInt($('#startSize').val());

    var modifiedText = '';
    var differental = 4;

    for(var i = 0; i < repeats; ++i)
    {
        modifiedText += "<span style='font-size:" + generateSizeForI(startSize, i, differental, repeats) + "px'>" + text + "</span>";
    }

    return modifiedText;
}

function generateSizeForI(initial, index, differental, repeats)
{
    var size = initial - (index * differental);

    return size > 0
        ? size
        : 1;
}