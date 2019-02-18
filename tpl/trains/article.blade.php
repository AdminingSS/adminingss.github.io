@extends('layouts.app')
@section('content')
    <div class="section content-page">
        <div class="container">
            @component('components::admin', ['links' => $article->admin()]) @endcomponent
            <h1 class="mb-2 mb-sm-4">{!! $article->name !!}</h1>
           {!! $article->text !!}
            <div>
                <a href="/{{$article->section->slug}}" class="tm-btn-back btn btn-secondary" title="{{ __('article.back') }}"><i class="fas fa-chevron-left"></i> {{ __('article.back') }}</a>
            </div>
        </div></div>
@endsection
@section('meta_title'){{$article->meta_title}}@endsection
@section('meta_keywords'){{$article->meta_keywords}}@endsection
@section('meta_description'){{$article->meta_description}}@endsection