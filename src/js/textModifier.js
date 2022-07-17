$('#form').submit(function (evt) {
    evt.preventDefault();
    
    var element = $('#generateOutput')
    element.empty();
    element.append(generateModifiedText());
});

function generateModifiedText()
{
    var text = $('#text').val();
    var repeats = $('#repeats').val();

    var modifiedText = '';

    for(var i = 0; i < repeats; ++i)
    {
        modifiedText += generateCarretArray(i) + text;
    }

    return modifiedText;
}

function generateCarretArray(size)
{
    return Array(size)
        .fill('^')
        .join('');
}