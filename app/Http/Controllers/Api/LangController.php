<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LangController extends Controller
{
    public function update()
    {
        app()->setLocale(request('locale'));
        session(['locale' => request('locale')]);

        return new JsonResponse([], Response::HTTP_OK);
    }

}
