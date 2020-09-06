@extends('product.layout')

@section('content')
    <br><br><br>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Laravel Product List</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="">Create New Product</a>
            </div>
        </div>

        <table class="table table-bordered">
            <tr>
                <th>Product Name</th>
                <th>Product Code</th>
                <th>Details</th>
                <th>Product Logo</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Product Name</td>
                <td>Product Code</td>
                <td>Details</td>
                <td></td>
                <td>
                    <a class="btn btn-info" href="">Show</a>
                    <a class="btn btn-primary" href="">Edit</a>
                    <a class="btn btn-danger" href="">Delete</a>
                </td>
            </tr>
        </table>
    </div>
@endsection
