<?php
$username = $_REQUEST['username'];
$userhp = $_REQUEST['userhp1'].$_REQUEST['userhp2'].$_REQUEST['userhp3'];
$useremail = $_REQUEST['useremail'];
$title = $_REQUEST['title'];
$contents = $_REQUEST['contents'];
$error = $_FILES['attachfile']['error'];
$name = $_FILES['attachfile']['name'];

if(!empty($name)){
    $uploads_dir = './uploads';
    // 오류 확인
    if( $error != UPLOAD_ERR_OK ) {
        switch( $error ) {
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                echo "파일이 너무 큽니다. ($error)";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "파일이 첨부되지 않았습니다. ($error)";
                break;
            default:
                echo "파일이 제대로 업로드되지 않았습니다. ($error)";
        }
        exit;
    }

    // 파일 이동
    move_uploaded_file( $_FILES['attachfile']['tmp_name'], "$uploads_dir/$name");
}

//db connection
$dburl = 'localhost';
$id = 'root';
$pw = '';
$db = 'itpro';

//connection
$connect_db = mysqli_connect($dburl, $id, $pw, $db) or 
die("<meta http-equiv='content-type' content='text/html; charset=utf-8'><script> alert('DB 접속 오류'); </script>");

mysqli_query($connect_db,"SET NAMES 'utf8'");

$result = mysqli_query($connect_db, "INSERT INTO estimate(username, userhp, useremail, title, contents, file_name, reg_date ) values('$username', '$userhp','$useremail','$title',
 '$contents', '$name',now() )");
?>
<script>
alert('성공적으로 입력되었습니다.');
location.href= 'index.html';
</script>