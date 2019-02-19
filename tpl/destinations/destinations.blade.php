@extends('layouts.app')
@section('content')
    @if($destinations)
        <div class="section content-page">
            <div class="container">
                @if($destination_page)
                        <h1 class="mb-4">{{$destination_page->h1}}</h1>
                    @if(isset($destination_page->text) && sizeof($destination_page->text) > 0)
                        <div class="mb-5">
                            @foreach($destination_page->text as $k=>$v)
                                @if($v['title'] != '' && $v['title'] != 'Description')
                                    <h2 class="mb-3 mb-sm-4">{{$v['title']}}</h2>
                                @endif
                                <div  class="@if(isset($v['columns']) && $v['columns'] == 2) column-count-2 @else column-count-1 @endif">
                                    {!! $v['text'] !!}
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @section('meta_title'){{$destination_page->meta_title}}@endsection
                    @section('meta_keywords'){{$destination_page->meta_keywords}}@endsection
                    @section('meta_description'){{$destination_page->meta_description}}@endsection
                @endif
{{--
                    @if($coords && sizeof($coords) > 0)
                        <div class="map">
                            <div id='map' style='width: 100%; height: 350px;'></div>
                        </div>

                        @push('scripts')
                            <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
                            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
                            <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js' charset='utf-8'></script>

                            <script>
                                mapboxgl.accessToken = '{{config('common.mapbox_api_key')}}';


                                var map = new mapboxgl.Map({
                                    container: 'map',
                                    maxZoom: 12,
                                    center: [37.61778, 55.75583],
                                    zoom:3,
                                    showZoom:true,
                                    style: 'mapbox://styles/mapbox/streets-v9'
                                });


                                var nav = new mapboxgl.NavigationControl();
                                map.addControl(nav, 'top-left');



                                map.on('load', function() {
                                    @foreach($coords as $k=>$v)
                                    map.addSource('single-point{{$k}}', {
                                        "type": "geojson",
                                        "data":  {
                                            "type": "FeatureCollection",
                                            "features": [
                                                {
                                                    "type": "Feature",
                                                    "geometry": {
                                                        "type": "LineString",
                                                        "coordinates": {{json_encode($v)}}
                                                    }
                                                }
                                            ]
                                        }
                                    });

                                    map.addLayer({
                                        "id": "point{{$k}}",
                                        "source": "single-point{{$k}}",
                                        "type": "circle",
                                        "paint": {
                                            "circle-radius": 4,
                                            "circle-color": "#e40000"
                                        }
                                    });

                                    map.addLayer({
                                        "id": "line{{$k}}",
                                        "source": "single-point{{$k}}",
                                        "type": "line",
                                        "paint": {
                                            "line-color": "#e40000",
                                            "line-opacity": 0.75,
                                            "line-width": 2
                                        }
                                    });
                                    @endforeach

                                });
                            </script>

                        @endpush
                    @endif
--}}
                <div class="row mb-5">
                    @foreach($destinations as $destination)
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                @if($destination->image != '')
                                    <div>
                                        <a href="/destination-{{$destination->slug}}" class="image-link"><img src="{{$destination->image}}" class="card-img-top" alt="{{$destination->name}}"></a>
                                    </div>
                                @endif

                                <div class="card-body">
                                    <h3 class="card-title"><a href="/destination-{{$destination->slug}}">{{$destination->name}}</a></h3>
                                    <p class="card-text">{{$destination->description}}</p>
                                </div>

                                <div class="card-footer">
                                    <a href="/destination-{{$destination->slug}}" class="btn tm-btn-red">RRead more</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="pagination-wrapper"> {{$destinations->links()}} </div>
            </div>
        </div>
    @endif

@endsection