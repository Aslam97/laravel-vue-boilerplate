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
        return [
            true => new JsonResponse(true, Response::HTTP_OK),
            false => new JsonResponse(false, Response::HTTP_UNAUTHORIZED),
        ][!is_null($request->user())];
    }
}
