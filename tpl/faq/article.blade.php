@extends('layouts.app')
@section('content')
    <div class="section content-page">
        <div class="container">
            @component('components::admin', ['links' => $article->admin()]) @endcomponent
            <h1 class="mb-2 mb-sm-4">{!! $article->name !!}</h1>
            <div class="faq-article">{!! $article->text !!}</div>
            <div class="page-controls">
                @if(($prev = $article->prev()->first()))
                    <a href="/{{$article->section->slug}}/{{$prev->slug}}" class="btn btn-secondary mr-2" title="{{ __('article.prev') }}"><i class="fas fa-chevron-left"></i></a>
                @endif
                @if(($next = $article->next()->first()))
                    <a href="/{{$article->section->slug}}/{{$next->slug}}" class="btn tm-btn-red" title="{{ __('article.next') }}"><i class="fas fa-chevron-right"></i></a>
                @endif
            </div>
            <div>
                <a href="/{{$article->section->slug}}" class="tm-btn-back btn btn-secondary" title="{{ __('article.back') }}"><i class="fas fa-chevron-left"></i> {{ __('article.back') }}</a>
            </div>
        </div></div>
@endsection
@section('meta_title'){{$article->meta_title}}@endsection
@section('meta_keywords'){{$article->meta_keywords}}@endsection
@section('meta_description'){{$article->meta_description}}@endsection