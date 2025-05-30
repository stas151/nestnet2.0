<?php
$arr = [];
for ($i = 0; $i < 20; $i++) $arr[] = rand(1, 100);
echo implode(", ", $arr);
?>