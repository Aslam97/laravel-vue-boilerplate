<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Show the application's login form.
     *
     * @return \Illuminate\View\View
     */
    public function showLoginForm()
    {
        return view('index');
    }

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        if ($request->wantsJson()) {
            return new JsonResponse($user, Response::HTTP_OK);
        }
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $locale = $request->session()->get('locale') ?: app()->getLocale();

        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        $this->setLocale($locale);

        if ($response = $this->loggedOut($request, $locale)) {
            return $response;
        }

        return $request->wantsJson() ? new JsonResponse([], Response::HTTP_NO_CONTENT) : redirect('/');
    }

    /**
     * The user has logged out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    protected function loggedOut(Request $request, $locale)
    {
        if ($request->wantsJson()) {
            return new JsonResponse(['locale' => $locale], Response::HTTP_OK);
        }
    }

    /**
     * setLocale
     *
     * @param  mixed $locale
     * @return void
     */
    public function setLocale($locale)
    {
        app()->setLocale($locale);
        session(['locale' => $locale]);
    }
}
