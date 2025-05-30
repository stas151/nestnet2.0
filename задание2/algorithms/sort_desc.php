<?php
$arr = [];
for ($i = 0; $i < 10; $i++) $arr[] = rand(1, 100);
rsort($arr);
echo implode(", ", $arr);
?>