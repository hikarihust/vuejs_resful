<!DOCTYPE html>
<html>
    <head>
        <title>Laravel 7 Home Page</title>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    </head>
    <body>
        <div class="container">
            <div class="row">
                <h1>Add product</h1>
                <a class="btn btn-info" href="{{ route('product.index') }}">Add Product</a>
            </div>
        </div>
    </body>
</html>
