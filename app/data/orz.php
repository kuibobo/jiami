<?php
/**
 * Lunch Order system backend PHP file
 * @author ONE
 * @time 2012-09-19
 */

$action = isset ( $_REQUEST['action'] ) ? $_REQUEST['action'] : '';
$json = isset ( $_REQUEST['json'] ) ? $_REQUEST['json'] : '';

$cur_file = date( 'Y-m-d' ) . '.txt';
if ( file_exists($cur_file))
	$cur_json = $_GET['callback'] . '(' . file_get_contents( $cur_file ) . ')'; 
else
	$cur_json = $_GET['callback'] . '({"rows":[]})';

if ( $action == 'get' ) {
	echo $cur_json;
} else if ( $action == 'set') {
	file_put_contents( $cur_file, $json );
	echo $_GET['callback'] . '({"success":"1"})';
}

?>
