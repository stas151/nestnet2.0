<?php
function parse($s) {
  $rows = explode("\n", trim($s));
  return array_map(fn($r) => array_map('intval', preg_split('/\s+/', trim($r))), $rows);
}
$a = parse($_POST['a']);
$b = parse($_POST['b']);
$sum = [];
for ($i = 0; $i < count($a); $i++)
  for ($j = 0; $j < count($a[0]); $j++)
    $sum[$i][$j] = $a[$i][$j] + $b[$i][$j];
foreach ($sum as $row) echo implode(" ", $row) . "<br>";
?>