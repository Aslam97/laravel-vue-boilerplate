<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ValidateController extends Controller
{
    public function index(Request $request)
    {
        return new JsonResponse(!is_null($request->user()), Response::HTTP_OK);
    }
}
