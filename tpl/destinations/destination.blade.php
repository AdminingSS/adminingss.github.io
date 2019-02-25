<div class="content-page">
@component('components::admin', ['links' => $destination->admin()]) @endcomponent
    <div class="mb-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-4 col-lg-5">
                <div class="destination-name text-md-right">

                    @if(isset($destination->cities[0]))
                        {{$destination->citiesList[$destination->cities[0]]->name}}
                    @endif
                </div>
            </div>
            <div class="col-8 col-sm-6 col-md-3 col-lg-2 mb-3">
                <div class="destination-distance">
                    @if(isset($destination->elements['distance']))
                        {{$destination->elements['distance']}}
                    @endif
                </div>
            </div>
            <div class="col-md-4 col-lg-5">
                <div class="destination-name text-right text-md-left">
                    @if(isset($destination->cities[1]))
                        {{$destination->citiesList[$destination->cities[1]]->name}}
                    @endif
                </div>
            </div>
        </div>
    </div>


    <div class="mb-3">
        <div class="row">
            @if(isset($destination->elements['departure']))
            <div class="col-md-6 mb-3">
                <h3 class="mb-4">{{__('rzd.Departure_station')}}:</h3>
                <div>
                    {!! $destination->elements['departure'] !!}
                </div>
            </div>
            @endif
            @if(isset($destination->elements['arrival']))
                    <div class="col-md-6 mb-3">
                <h3 class="mb-4">{{__('rzd.Arrival_station')}}:</h3>
                <div>
                    {!! $destination->elements['arrival'] !!}
                </div>
            </div>
            @endif
        </div>
    </div>



    @if(isset($destination->elements['trains_table']))
        <div  class="mb-5"> {!! $destination->elements['trains_table'] !!} </div>
    @endif


            @if(isset($destination->elements['accordion']) && sizeof($destination->elements['accordion']) > 0)

                @foreach($destination->elements['accordion'] as $k=>$v)
                        @if($v['title'] != '' && $v['title'] != 'Description')
                            <h2 class="mb-3 mb-sm-4">{{$v['title']}}</h2>
                        @endif
        @if(trim(strip_tags($v['text'])) != '')
                            <div class="mb-5">
                            <div  class="@if(isset($v['columns']) && $v['columns'] == 2) column-count-1 @else column-count-2 @endif">
                                {!! $v['text'] !!}
                         </div>
                            </div>
                            @endif
                @endforeach

            @endif

            @if(isset($destination->elements['facts_table']))
                <div class="mb-5">
                {!! $destination->elements['facts_table'] !!}
                </div>
            @endif

  {{--  @include("components::destination_map", ['destination' => $destination])--}}


</div>