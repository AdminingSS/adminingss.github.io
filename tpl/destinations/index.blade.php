@extends('layouts.app')
@include('components::rzd_result_variables')
@php
$load = true;
@endphp
@section('content')

    <div class="section">
        <div class="container">
                <h1 class="mb-2 mb-sm-4">
                    @if($train && $train->h1 != '')
                        {{$train->h1}}
                    @elseif($destination)
                        {{$destination->name}}
                     @else
                        {{__('order.Select_seats')}}
                    @endif
                </h1>

                @if($result)

                    <div id="steps" style="display:none">
                        @include('order.steps', ['percent' => 20])
                    </div>
                    <a name="top"></a>
                    @if(sizeof($result) > 1)
                        <ul class="ticket-menu nav">
                            @foreach ($result as $kk => $tab)
                                <li class="nav-item @if(isset($order->trips['trip'.$kk])) active @endif">
                                    @if(isset($tab['data']['date_from']))
                                        <a data-toggle="tooltip" class="nav-link @if($kk ==$current) active @endif" id="tab{{$kk}}" href="{{request()->fullUrlWithQuery(['current' => $kk])}}"
                                           @if(isset($order->trips['trip'.$kk]))
                                           @php
                                               $price = \Price::convert($order->trips['trip'.$kk]['price'], 'rub', Session('currency'));
                                           @endphp
                                           title="
                                                 {{__('rzd.Train')}}: {{$order->trips['trip'.$kk]['train_number']}}
                                           @if(isset($order->trips['trip'.$kk]['train_id']) && $order->trips['trip'.$kk]['train_id'] != '' && isset($order->train[$order->trips['trip'.$kk]['train_id']])) {{$order->train[$order->trips['trip'.$kk]['train_id']]->name}} @endif
                                                   <br /> {{__('rzd.Tickets_class')}}: {{$order->trips['trip'.$kk]['class']}}<br />
                                                    {{__('rzd.Price')}}: {{$price}} {{strtoupper(Session('currency'))}}
                                                   " @endif
                                        >
                                            {{$tab['data']['city1_name']}} - {{$tab['data']['city2_name']}}, {{date("d M Y", strtotime($tab['data']['date_from']))}}
                                        </a>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                    @endif
                    @php
                        $max = sizeof($data['result'])-1;
                    @endphp
                    @if($max == -1)
                        @if( !$destination && !$train)

                            <div id="near">
                                <rzdsearchnear
                                        :date="'{{$data['data']['date_from']}}'"
                                        :code0="{{$data['data']['city1']}}"
                                        :code1="{{$data['data']['city2']}}"
                                        :trips_count="{{$trips_count}}"
                                        :url="'{{route('rzd.search_near',['code0' => $data['data']['city1'],'amount' =>$amount, 'code1'=> $data['data']['city2'], 'date'=> ''])}}'"
                                >
                                </rzdsearchnear>
                            </div>
                            @push('scripts')
                                <script>
                                    const near = new Vue({
                                        el: '#near',
                                        components: {
                                        }
                                    });
                                </script>
                            @endpush
                        @endif
                        @php
                            $load = false;
                        @endphp
                    @else
                        <div id="preload" style="text-align:center"><img src="/icons/train.gif" /></div>

                        {{--  <a href="#" class="btn-scroll-to-selected btn btn-outline-secondary">
                              <i class="fas fa-angle-up"></i>
                              <span>{{__('rzd.Selected')}}</span>
                              <i class="fas fa-angle-down"></i>
                          </a>--}}
                        <div class="row ticket-container" style="display:none">
                            <div class="col-lg-9 rzd-tab-pane" id="h{{$current}}">
                                <div class="ticket-result">
                                    <div class="ticket-header">
                                        <div class="container-fluid">
                                            <div class="row-divider row">
                                                <div class="col-md-7 mb-2 mb-md-0">
                                                    <div>

                                                        <a href="#searchModal" class="ticket-direction-text" data-toggle="modal">
                                                            <span>{{$data['data']['city1_name']}} - {{$data['data']['city2_name']}}</span></a>
                                                    </div>
                                                    <div>{{trans_choice('rzd.results', sizeof($data['result']), ['count' => sizeof($data['result'])])}}</div>
                                                </div>
                                                <div class="col">
                                                    <div><a href="#searchModal" class="ticket-direction-text" data-toggle="modal"><span>{{date("d M", strtotime($data['data']['date_from']))}}</span></a></div>
                                                    <div>{{date("l", strtotime($data['data']['date_from']))}}</div>
                                                </div>
                                                <div class="col">
                                                    <div>
                                                        <a href="#searchModal" class="ticket-direction-text" data-toggle="modal">
                                                            <span>{{$data['data']['amount']}} x <i class="fas fa-male"></i></span>
                                                        </a>
                                                    </div>

                                                    <div>{{__('rzd.Travelers')}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ticket-sort">
                                        <div class="container-fluid">
                                            <div class="row align-items-center justify-content-between">
                                                <div class="col-6 col-md-3">
                                                    <div class="ticket-sort-item asc" data-sort="date"
                                                         data-sort_direction="desc">
                                                        {{__('rzd.Departure')}}
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3">
                                                    <div class="ticket-sort-item" data-sort="travel_time"
                                                         data-sort_direction="asc">
                                                        {{__('rzd.Travel_time')}}
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3 col-lg-auto">
                                                    <div class="ticket-sort-item" data-sort="arrival"
                                                         data-sort_direction="asc">
                                                        {{__('rzd.Arrival')}}
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3 col-lg-auto ml-auto">
                                                    <div class="ticket-sort-item" data-sort="price" data-sort_direction="asc">
                                                        {{__('rzd.Price_from')}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid" id="ticket-accordion">

                                        @foreach ($data['result'] as $k=>$v)
                                            @php

                                                $date0 = strtotime($v['date0']);
                                                $date1 = strtotime($v['date1']);

                                                $date01 = strtotime($v['date0'].' '.$v['time0']);
                                                $date11 = strtotime($v['date1'].' '.$v['time1']);

                                                $t = explode(":", $v['time0']);
                                                $time0 = preg_replace("/^([0]{1}).*?/","",$t[0]);
                                                $t[1] = preg_replace("/^([0]{1}).*?/","",$t[1]);


                                                $t = explode(":", $v['time1']);
                                                $time1 = preg_replace("/^([0]{1}).*?/","",$t[0]);
                                                $t[1] = preg_replace("/^([0]{1}).*?/","",$t[1]);
                                                if($t[1] > 0) $time1++;

                                                $duration = preg_replace("/^([0]+).*?/", "", str_replace(":", "", $v['timeInWay']));
                                                $timeInWay = (substr($duration,0,-2)*60)+substr($duration,-2);
                                                $timeInWay1 = $timeInWay;
                                                $days = floor($timeInWay1 / (24*60));
                                                if($days > 0) {
                                                    $timeInWay1 -= $days*24*60;
                                                    $days = $days.__('rzd.days').' ';
                                                }
                                                else $days = '';

                                                $hours = floor($timeInWay1 / 60);
                                                $minutes = $timeInWay1 - ($hours * 60);

                                                if(strlen($hours) == 1) $hours = '0' . $hours;
                                                if(strlen($minutes) == 1) $minutes = '0' . $minutes;
                                                $time = $days.$hours.__('rzd.h').' '.$minutes.__('rzd.min');
                                            @endphp

                                            <div class="ticket-item"
                                                 id="i{{$k}}"
                                                 data-date="{{$date01}}"
                                                 data-price="{{$v['tariff']}}"
                                                 data-travel_time="{{$duration}}"
                                                 data-duration="{{$timeInWay }}"
                                                 data-arrival="{{$date11}}"
                                                 data-time0="{{$time0}}"
                                                 data-time1="{{$time1}}"
                                                 data-classes="{{collect($v['classes'])->keyBy('name')->keys()->toJson()}}"
                                            >
                                                <div class="container-fluid">
                                                    <div class="row align-items-center">
                                                        <div class="col-lg-7 mb-3">
                                                            <div class="row mb-1">
                                                                <div class="col-8">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-6">
                                                                            <div class="ticket-from">
                                                                                <div class="time">{{$v['time0']}}</div>
                                                                                <div class="arrive-date">{{date("d M Y D", $date0)}}</div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-6">
                                                                            <div class="ticket-duration">
                                                                                {{$time}}
                                                                                <div class="duration-bar"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-4">
                                                                    <div class="ticket-to">
                                                                        <div class="time">{{$v['time1']}}</div>
                                                                        @if(date("d", $date0) != date("d", $date1))
                                                                            <div class="arrive-date">{{date("d M Y D", $date1)}}</div>
                                                                        @endif
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6">
                                                                    <div class="ticket-from">
                                                                        <div class="city">{{$data['data']['city1_name']}}</div>
                                                                        <div class="station">    @if(isset($v['station0']))
                                                                                {{$v['station0']}}
                                                                            @endif </div>

                                                                    </div>
                                                                </div>

                                                                <div class="col-6">
                                                                    <div class="ticket-to">
                                                                        <div class="city">{{$data['data']['city2_name']}}</div>
                                                                        <div class="station"> @if(isset($v['station1']))
                                                                                {{$v['station1']}}
                                                                            @endif
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="col-sm">
                                                            <div class="ticket-total">
                                                                @if($v['tariff'] > 0)
                                                                    {{__('rzd.total_for')}} {{$data['data']['amount']}}: {{$data['data']['amount']*$v['tariff']}} <span>{{session('currency')}}</span>
                                                                @endif

                                                            </div>
                                                        </div>

                                                        <div class="col-sm">
                                                            <div class="ticket-price">
                                                                @if($v['tariff'] > 0)
                                                                    <div class="amount">{{$v['tariff']}} <span>{{session('currency')}}</span></div>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="ticket-info">
                                                        <div class="ticket-info">
                                                            @if($v['train']) {{$v['train']['fullName']}}
                                                            @else
                                                                <span> {{$v['number']}} @if($v['number2'] != '' && $v['number'] != $v['number2'])  /{{$v['number2']}} @endif </span>
                                                                @if($v['number'] != $v['brand'] && $v['number2'] != $v['brand']) {{$v['brand']}} @endif
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="ticket-description mb-2">
                                                        <div class="row align-items-center">
                                                            <div class="col-sm">
                                                                @include('rzd.extras', ['v' => $v])
                                                            </div>
                                                            <div class="col-sm">
                                                                <div class="ticket-data-item">{!! trans_choice('rzd.in_stock', $v['freeSeats'],['places' => $v['freeSeats']]) !!}</div>
                                                            </div>
                                                            @if(isset($v['cars']) && sizeof($v['cars']) > 0)
                                                                @php
                                                                    $m = sizeof($v['cars']);
                                                                @endphp
                                                                <div class="col-sm">
                                                                    <div class="ticket-data-item"><b>{{__('rzd.Seats')}}: </b>
                                                                        {!! trans_choice('rzd.classes_available',$m, ['count' => $m]) !!}
                                                                    </div>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    </div>

                                                    <div class="row justify-content-between align-items-end">
                                                        <div class="col">
                                                            <div class="ticket-route">
                                                                <a href="#" data-toggle="modal" data-target="#routeModal" data-number="{{$v['number']}}" data-date_from="{{$v['date0']}}" data-time="{{$v['time0']}}" data-code0="{{$data['data']['city1']}}" data-code1="{{$data['data']['city2']}}">
                                                                    {{__('rzd.Route')}}
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="col-auto">

                                                            <button type="button" class="open_class tm-button-open btn tm-btn-red collapsed"
                                                                    data-toggle="collapse"
                                                                    data-target="#trainCollapse{{$k}}"
                                                                    id="data{{$current}}_{{$k}}"
                                                                    data-tab="{{$current}}"
                                                                    @if(isset($v['cars']) && sizeof($v['cars']) > 0)
                                                                    data-cars="{{json_encode(['cars' =>$v['cars'], 'classes' =>$v['classes']])}}"
                                                                    @endif
                                                                    data-load="false"
                                                                    data-key="{{$k}}"
                                                                    data-number="{{$v['number']}}"
                                                                    data-station0="{{$v['station0']}}"
                                                                    data-station1="{{$v['station1']}}"
                                                                    data-code0="{{$data['data']['city1']}}"
                                                                    data-code1="{{$data['data']['city2']}}"
                                                                    data-date_from="{{$v['date0']}}"
                                                                    data-time="{{$v['time0']}}"
                                                                    data-date_to="{{$v['date1']}}"
                                                                    data-time_to="{{$v['time1']}}"
                                                            >{{__('rzd.Select_seats')}}
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div id="trainCollapse{{$k}}" class="collapse rzd-class-container" data-parent="#ticket-accordion">

                                                        <div class="icars icars{{$current}}_{{$k}}"></div>
                                                        <div class="preloader" style="text-align:center"><img src="/icons/black-train.gif" /></div>

                                                        <div class="cars"></div>

                                                        <div class="train-order do_order{{$current}}_{{$k}}" style="display:none;">
                                                            <div class="container-fluid">
                                                                <div class="row align-items-center">
                                                                    <div class="col-md">
                                                                        <div class="seats-total-price">
                                                                            {{trans_choice('rzd.total_for_count', $data['data']['amount'],['count' => $data['data']['amount']])}}:  <span class="all price"></span> <span class="currency">{{strtoupper(session('currency'))}}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md">
                                                                        <div class="seats-btn">
                                                                            @if($global_tabs > 0)
                                                                                @if($current != 0)
                                                                                    <button type="button" class="btn btn-secondary" onclick="if(check_selected_seats({{$current}})) {$('#do_order').find('[name=direction]').val(-1);$('#do_order').submit();}"><i class="fa fa-angle-double-left"></i>{{__('rzd.Previous_trip')}}</button>
                                                                                @endif
                                                                                @if($current != $global_tabs)
                                                                                    <button type="button" class="btn tm-btn-red" onclick="if(check_selected_seats({{$current}})) {$('#do_order').find('[name=direction]').val(1);$('#do_order').submit();}">{{__('rzd.Next_trip')}}<i class="fa fa-angle-double-right"></i></button>
                                                                                @endif

                                                                            @endif
                                                                            @if($global_tabs == 0 || (is_array($order->trips) && $trips_count-1 <= sizeof($order->trips)))
                                                                                <button type="button" class="btn tm-btn-red" onclick="if(check_selected_seats({{$current}})) {$('#do_order').find('[name=direction]').val(0);$('#do_order').submit();}">{{__('order.Continue2')}} <i class="fa fa-angle-double-right"></i></button>
                                                                            @endif
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 search-pane">
                                @include('rzd.filter', ['data' =>$data])
                            </div>
                        </div>

                        <div class="tm-route-modal modal fade" id="routeModal" tabindex="-1" role="dialog" aria-labelledby="routeModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="routeModalLabel"></h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="{{__('layout.close')}}">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div id="modal_preload" style="text-align:center"><img src="/icons/train.gif" /></div>
                                        <div id="routeModalContent"></div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">{{__('layout.close')}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
                            <div class="tm-modal-search modal-dialog" role="document">
                                <rzdmodalchangesearch-component
                                        :no_rzd_page="{{$no_rzd_page}}"
                                        city1_name="{{$data['data']['city1_name']}}"
                                        city2_name="{{$data['data']['city2_name']}}"
                                        :city1_code="{{$data['data']['city1']}}"
                                        :city2_code="{{$data['data']['city2']}}"
                                        date_from="{{$data['data']['date_from']}}"
                                        @if(isset($data['data']['date_to'])) date_to="{{$data['data']['date_to']}}" @endif
                                        :amount="{{$data['data']['amount']}}"
                                        :trip="{{$trip}}"
                                        @if($trip == 2)
                                        :current="{{$current}}"
                                        city_list="{{collect($search)->transform(function($i) {
        return array_only($i, ['city1', 'city2', 'date_from']);
    })->toJson()}}"
                                        @endif
                                />

                            </div>
                        </div>
                        @include('components::rzd_result_form')
                    @endif
                @elseif( !$destination && !$train)
                    <div class="text"> <strong>{{__('rzd.Not_found')}}</strong></div>
                    @php
                        $load = false;
                    @endphp
                @endif

                @if($train)
                    @component('components::admin', ['links' => $train->admin()]) @endcomponent
                    @if($train->full_description)
                        <div class="static-content">{!! $train->full_description !!}</div>
                    @endif
                @elseif($destination)
                    @include('rzd.destination', ['destination' => $destination])
                @endif

        </div>
    </div>
    @if($load) @include('components::rzd_result_js') @endif
@endsection