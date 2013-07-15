
function filterName(args)  // Callback
{
  var keyword=args.toString();
  var trackname=keyword.split("BPM ");
  if (!trackname[1]) {
    var name = keyword;
} else {
    var name = trackname[1];
}
  
  outlet(0, name);

}