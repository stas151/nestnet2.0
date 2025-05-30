<?php
echo "<table border='1'><tr><th>x</th><th>cos(x)</th></tr>";
for ($x = 0; $x <= pi(); $x += pi()/10) {
    echo "<tr><td>$x</td><td>" . cos($x) . "</td></tr>";
}
echo "</table>";
?>