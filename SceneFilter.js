
function filterName(args)  // Callback
{
  var keyword=args.toString();
  var trackname=keyword.split("BPM ");
  if (!trackname[0]) {
    var name = keyword;
} else {
    var name = trackname[0];
}

  name = name.replace(/\s(\s)+/g, " "); // Whitespace
  name = name.replace(/[0-9]+/g, ""); // Numbers
  
  outlet(0, name);

}
