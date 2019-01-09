@php
    use Carbon\Carbon;
@endphp
@extends('layouts.app')
@section('content')

        <div class="order-wrap">
            <div class="container">
                <div class="order-number">Order {{$order->id}} of {{Carbon::createFromTimeString($order->processed_at)->format('d.m.Y H:i')}}</div>
                <div class="order">
                    <div class="order-trips"><div class="order-trip">
                            @if(sizeof($order->invoices) > 0)
                                <div class="order-trip-header">
                                    Download invoices:
                                </div>
                                <div class="order-section">
                                    <p>
                                        <label class="checkbox-wrap">
                                              <span class="checkbox">
                                            <input type="checkbox" autocomplete="off" onchange="$('#invoices').slideToggle()" />
                                                   <span></span>
                                              </span>тут много текста о том что перед скачкой файлов билетов мы никому ничего не должны
                                        </label>
                                    </p>
                                    <div id="invoices" class="invoices" style="display:none">
                                        @foreach($order->invoices  as $v)
                                            <p><a href="{{route('download-invoice', ['id' => $order->id, 'file'=> $v])}}">{{$v}}</a></p>
                                        @endforeach
                                    </div>
                                </div>
                            @endif

                        @php
                            $all = 0;
                            $min_date = 0;
                        @endphp

                        @foreach($order->trips as $trip)
                                    @php
                                        $price = \Price::convert($trip['price'], 'rub', $order->currency, $order->rate_currency);
                                        $all += $price*$order->amount;
                                        if($min_date == 0 || $min_date > strtotime($trip['date0'])) $min_date = strtotime($trip['date0']);
                                    //{{$price}} {{strtoupper($order->currency)}} x {{$order->amount}} = {{$price*$order->amount}} {{strtoupper($order->currency)}}
                                    @endphp

                                <div class="order-trip-header">
                                    <div class="order-header-direction">
                                        <div class="order-direction">
                                            <div>
                                                <span>{{$order->city[$trip['code0']]->name}}</span>
                                            </div>
                                            <div>
                                                <span>{{$order->city[$trip['code1']]->name}}</span>
                                            </div>
                                        </div>
                                        <div class="order-trip-description">{{$trip['train_number']}}
                                            @if(isset($trip['train_id']) && $trip['train_id'] != '' && isset($order->train[$trip['train_id']]) && $trip['train_number'] != $order->train[$trip['train_id']]->name)
                                                {{$order->train[$trip['train_id']]->name}}
                                            @endif
                                        </div>
                                    </div>
                                    <div class="order-header-info">
                                        <div class="amount">{{$order->amount}} @if($order->amount == 1) ticket @else tickets @endif </div>
                                        <div class="type">{{$trip['class']}}</div>
                                    </div>
                                </div>
                                <div class="order-info">
                                    <div class="order-info-items">
                                        <div class="order-info-item">
                                            <div class="label">Departure / Arrival date</div>
                                            <div class="info">
                                                <p>{{date("d M Y D", strtotime($trip['date0']))}}</p>
                                                <p>{{date("d M Y D", strtotime($trip['date1']))}}</p>
                                            </div>
                                        </div>
                                        <div class="order-info-item">
                                            <div class="label">Departure time / Station</div>
                                            <div class="info">{{$trip['time0']}} <span>Local time</span></div>
                                            <div class="description">{{$trip['station0']}}</div>
                                        </div>
                                        <div class="order-info-item">
                                            <div class="label">Arrival time / Station</div>
                                            <div class="info">{{$trip['time1']}} <span>Local time</span></div>
                                            <div class="description">{{$trip['station1']}}</div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                            <div class="order-trip-header">
                                Travelers
                            </div>
                            <div class="order-travelers order-section">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Birthdate</th>
                                        <th scope="col">Passport</th>
                                        <th scope="col">Citizenship</th>
                                        <th scope="col">Gender</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    @foreach($order->ticket_data as $v)
                                        <tr>
                                            <td scope="row">
                                                {{$v['first_name']}} {{$v['middle_name']}} {{$v['last_name']}}
                                            </td>
                                            <td scope="row">
                                                {{$v['birthday']}}
                                            </td>
                                            <td scope="row">
                                                {{$v['passport']}}
                                            </td>
                                            <td scope="row">
                                                {{$v['citizenship']}}
                                            </td>
                                            <td scope="row">
                                                {{$v['sex']}}
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                            @if(is_array($order->extra_data) && sizeof($order->extra_data) > 0)
                                <div class="order-trip-header">
                                    Optional Services
                                </div>
                                @foreach($order->extra_data as $v)
                                    <div class="order-prefence order-section">
                                        <div>{{$v['name']}}</div>
                                        <div class="seat-preference">
                                            @php
                                                $convert = $v['type'] != '2' ? \Price::convert($v['price'], 'rub', $order->currency, $order->rate_currency) : $v['price'];
                                            @endphp
                                            @if($v['type'] == '0')
                                                <b>{{$convert}} {{strtoupper($order->currency)}}</b>
                                            @elseif($v['type'] == '1')
                                                <b>{{$convert}} {{strtoupper($order->currency)}} per person</b>
                                            @else
                                                <b>+{{$convert}}% per person</b>
                                            @endif
                                        </div>
                                    </div>
                                @endforeach
                            @endif

                            <div class="order-trip-header">
                                Contact info
                            </div>

                            <div class="order-prefence order-section">
                                <div>Contact name</div>
                                <div class="seat-preference">{{$order->contact_name}}
                                </div>
                            </div>
                            <div class="order-prefence order-section">
                                <div>Email</div>
                                <div class="seat-preference">{{$order->email}}
                                </div>
                            </div>
                            <div class="order-prefence order-section">
                                <div>Phone</div>
                                <div class="seat-preference">{{$order->phone}}
                                </div>
                            </div>
                            @if($order->add_info != '')
                                <div class="order-prefence order-section">
                                    <div>Additional information</div>
                                    <div class="seat-preference">{{$order->add_info}}
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                    <div class="order-sidebar">
                        <div class="order-total">
                            <div class="order-total-item">
                                <div class="order-total-head">Order details</div>
                                @if($order->status)
                                    <div class="order-status">
                                        <div>Order status</div>
                                        <div class="state green">{{$order->status->name}}</div>
                                    </div>
                                @endif
                                @if($order->paid_at != '')
                                    <div class="order-status">
                                        <div>Your payment of {{$order->price}} {{strtoupper($order->currency)}} has been received. Your order is being processed.
                                            Your tickets will be issued on {{Carbon::createFromTimeString($order->paid_at)->format('d.m.Y')}} and sent to your email.</div>
                                    </div>
                                @endif

                            </div>
                            <div class="order-total-item">
                                @if($all > 0)
                                <div class="order-total-paid">
                                    <div>Total for addons</div>
                                    <div class="price">{{floor($order->price-$all)}} <span class="currency">{{strtoupper($order->currency)}}</span></div>
                                </div>
                                @endif
                                <div class="order-total-paid">
                                    <div>Total paid</div>
                                    <div class="price">{{$order->price}} <span class="currency">{{strtoupper($order->currency)}}</span></div>
                                </div>
                                <div class="order-total-description">Total amount includes all service fees.</div>
                            </div>

                            <div class="order-total-buttons">
                                @if($order->paid_at == '' && time() <= $min_date)
                                    <a href="/order/pay/{{$order->id}}" class="link paybutton">Pay</a>
                                @endif

                                @if($min_date >= time()+30*24*60*60)
                                    <button class="link grey" data-toggle="modal" type="button" data-target="#modifyModal">Modify</button>
                                    <button class="link grey" data-toggle="modal" type="button" data-target="#cancelModal">Cancel</button>

                                    {{--Modify modal--}}
                                    <div class="modal fade order-modal" id="modifyModal" tabindex="-1" role="dialog" aria-labelledby="modifyModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="modifyModalLabel">Modification request</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div id="modifyModalContent">
                                                        <p>Modification description</p>
                                                        @include('home.order_modal_form', ['type' => 'modify'])
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {{--Cancellation modal--}}
                                    <div class="modal fade order-modal" id="cancelModal" tabindex="-1" role="dialog" aria-labelledby="cancelModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="cancelModalLabel">Cancellation request</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div id="cancelModalContent">
                                                        <p>Cancellation fees apply according to Terms and Conditions</p>
                                                        @include('home.order_modal_form', ['type' => 'cancel'])
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @elseif(time() <= $min_date)
                                    @php
                                        $days = ceil(($min_date - time())/(60*60*24))
                                    @endphp
                                    <button class="link grey" disabled="disabled" data-toggle="tooltip" title="Modification is available a 30 days before the departure. Modification is not available in {{$days}} @if($days > 1) days @else day @endif before the departure.">Modify</button>
                                    <button class="link grey" disabled="disabled" data-toggle="tooltip" title="Cancellation is available a 30 days before the departure. Cancellation is not available in {{$days}} @if($days > 1) days @else day @endif before the departure.">Cancel</button>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@endsection