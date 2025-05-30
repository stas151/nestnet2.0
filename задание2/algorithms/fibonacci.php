<?php
$fib = [0, 1];
for ($i = 2; $i < 100; $i++) {
    $fib[$i] = $fib[$i-1] + $fib[$i-2];
}
echo implode(", ", $fib);
?>