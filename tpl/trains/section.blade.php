@extends('layouts.app')
@section('content')
    <div class="section content-page">
        <div class="container">
            @component('components::admin', ['links' => $section->admin()]) @endcomponent
            <h1 class="mb-2 mb-sm-4">{!! $section->name !!}</h1>

            @if($section->text != '')
                <div class="mb-5">{!! $section->text !!}</div>
            @endif

            @if($sections)
                <div class="row mb-5">
                    @foreach($sections as $sect)
                        <div class="col-md-6 col-lg-4 mb-4">
                            @component('components::admin', ['links' => $sect->admin()]) @endcomponent
                            <div class="card">
                                @if($sect->pic != '')
                                    <div>
                                        <a href="{{$sect->url}}" class="image-link"><img src="{{$sect->pic}}" class="card-img-top" /></a>
                                    </div>
                                @endif

                                <div class="card-body">
                                    <h3 class="card-title"><a href="{{$sect->url}}">{!! $sect->name !!}</a></h3>
                                    <p class="card-text">{!! $sect->description !!}</p>
                                </div>

                                <div class="card-footer">
                                    <a href="{{$sect->url}}" class="btn tm-btn-red">{{ __('article.read_more') }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
            @if($articles)
                <div class="row mb-5">
                    @foreach($articles as $article)
                        <div class="col-md-6 col-lg-4 mb-4">
                            @component('components::admin', ['links' => $article->admin()]) @endcomponent
                            <div class="card">
                                @if($article->pic != '')
                                    <div>
                                        <a href="{{$article->url}}" class="image-link"><img src="{{$article->pic}}" class="card-img-top" /></a>
                                    </div>
                                @endif

                                <div class="card-body">
                                    <h3 class="card-title"><a href="{{$article->url}}">{!! $article->name !!}</a></h3>
                                    <p class="card-text">{!! $article->description !!}</p>
                                </div>

                                <div class="card-footer">
                                    <a href="{{$article->url}}" class="btn tm-btn-red">{{ __('article.read_more') }}</a>
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