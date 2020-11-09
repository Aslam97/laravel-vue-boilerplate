<?php

namespace App\Http\Middleware;

use Closure;

class LangMiddleware
{
    /**
     * lang
     *
     * @var mixed
     */
    private $lang;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->lang = session('locale');
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (session()->has('locale')) {
            app()->setLocale($this->lang);
        }

        return $next($request);
    }
}
