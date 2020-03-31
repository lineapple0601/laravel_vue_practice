<?php
namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Request;

class PageController extends BaseController
{
    // リポートページのコントローラ
    public function report(Request $request)
    {
        return [
            'title' => 'report',
            'contents' => 'report contents blahblah'
        ];
    }

    // フォームページのコントローラ
    public function form(Request $request)
    {
        return [
            'title' => 'form',
            'contents' => 'form contents blahblah'
        ];
    }
}
