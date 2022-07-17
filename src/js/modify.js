$('#form').submit(function (evt) {
    evt.preventDefault();
    
    var output = $('#output')
    clearOutput(output);

    var text = $('#text').val();
    var repeats = $('#repeats').val();

    output.append(generateModifiedText(text, repeats));
});

function generateModifiedText(text, repeats)
{
    var modifiedText = '';

    for(var i = 0; i < repeats; ++i)
    {
        modifiedText += generateCarretArray(i) + text;
    }

    return modifiedText;
}

function generateCarretArray(size)
{
    return Array(size).fill('^').join('');
}

function clearOutput(elm)
{
    elm.empty();
}