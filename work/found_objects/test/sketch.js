var table;

function preload() {
  table = loadTable("mammals.csv", "csv", "header");
}
/* this is what new.csv looks like.
id, species
1, a
2, b
3, c
4, d
5, e <----- this row is what I want to add 
*/

function setup() {
  // var newRow = table.addRow();
  // newRow.setString("id", table.getRowCount());
  // newRow.setString("species", "e");
  // for (var r = 0; r < table.getRowCount(); r++) {
  //   for (var c = 0; c < table.getColumnCount(); c++) {
  //   // println(table.getString(r, c));
  //   }
  // }
  saveTable(table, 'new.csv');
}