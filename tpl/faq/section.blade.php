@extends('layouts.app')
@section('content')
    <div class="section content-page">
        <div class="container">
            @component('components::admin', ['links' => $section->admin()]) @endcomponent
            <h1 class="mb-2 mb-sm-4">{!! $section->name !!}</h1>
            @if($articles)
                <div id="faq-accordion" class="accordion mb-5">
                @foreach($articles as $k=>$article)
                    @component('components::admin', ['links' => $article->admin()]) @endcomponent
                    <div class="card">
                        <div class="card-header @if($k != 0) collapsed @endif" data-toggle="collapse" data-target="#faqCollapse-{{$k}}">
                            <h3 class="mb-0">{!! $article->name !!}</h3>
                        </div>
                        <div id="faqCollapse-{{$k}}" class="collapse @if($k == 0) show @endif" data-parent="#faq-accordion">
                            <div class="card-body">
                                <p>{!! $article->description !!}</p>
                                <div class="text-right">
                                    <a href="/{{$section->slug}}/{{$article->slug}}" class="btn tm-btn-red">{{ __('article.read_more') }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                </div>
                <div class="pagination-wrapper"> {{$articles->links()}} </div>
                @endif
        </div></div>
@endsection
@section('meta_title'){{$section->meta_title}}@endsection
@section('meta_keywords'){{$section->meta_keywords}}@endsection
@section('meta_description'){{$section->meta_description}}@endsection