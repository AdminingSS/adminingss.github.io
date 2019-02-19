@extends('layouts.app')

@section('content')
    @php
        use Carbon\Carbon;
        $seats = 0;
        $extras = $trips = $extras_price = [];
    @endphp
        <div class="section section-small-top" id="ordering">
            <div class="container">
                <h1 class="mb-2 mb-sm-4">{{__('order.Personal_information')}}</h1>
                <!--Progressbar-->
                @include('order.steps', ['percent' => $percent, 'order' => $order])
                <div class="row">

                    <div class="col-lg-8 col-xl-9 mb-3">
                        <div class="order-trips">
                            <form method="post" onsubmit="return check_form($(this));" class="order-items" action="{{route('do_order', $order)}}">{{ csrf_field() }}
                                <div class="order-trip-item mb-4">
                                    @include("order.trips_list")

                                    <div class="order-trip-header">
                                        <div class="container-fluid">
                                            <h4 class="mb-0">{{__('order.Passenger_details')}}</h4>
                                        </div>
                                    </div>

                                    @if($order->canEdit)
                                        <div class="order-passengers">
                                            <div class="order-passenger">
                                                <div class="order-passenger-info">
                                                    <div class="container-fluid">
                                                        <div>
                                                            <label class="checkbox mb-0">
                                                                <input type="checkbox" class="form-check-inline" v-model="details" />
                                                                <span></span>
                                                                {{__('order.passenger_details_later')}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-passengers" v-if="details">
                                            <div class="order-passenger">
                                                <div class="order-passenger-info">
                                                    <div class="container-fluid">
                                                        <div>{{__('order.passenger_details_later_text')}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    @endif

                                    @include('order.passengers')

                                    @if($services && sizeof($services) > 0)

                                        <div class="order-trip-header">
                                            <div class="container-fluid">
                                                <h4 class="mb-0">
                                                    {{__('order.Extra_services')}}
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="order-services">
                                            <div class="container-fluid">
                                                @foreach($services as $k=>$v)
                                                    @php
                                                        $convert = \Price::convert($order->getItemExtraPrice($v->type, $v->price), 'rub', Session('currency'));
                                                        $extras_price[$v->id] = $convert;
                                                    @endphp
                                                    <div class="order-services-item">
                                                        <label class="checkbox">
                                                            <input type="checkbox" v-model="extras" :value="{{$v->id}}"  name="extra_data[{{$v->id}}]"
                                                            @if(isset($order->extra_data[$v->id]) || (old('extra_data.'.$v->id) ))
                                                                @php $extras[$v->id] = $v->id;  @endphp @endif>
                                                            <span></span>
                                                            {{$v->name}} <b>+{{$convert}} {{strtoupper(Session('currency'))}}</b>

                                                        </label>
                                                    </div>
                                                @endforeach
                                            </div> </div>
                                    @endif

                                </div>

                                <div class="order-trip-item mb-4">
                                    <div class="order-trip-header">
                                        <div class="container-fluid">
                                            <h4 class="mb-0">{{__('order.Contact_details')}}</h4>
                                        </div>
                                    </div>

                                    <div class="order-details">
                                        <div class="container-fluid">
                                            <div class="order-inputs">
                                                <div class="row">
                                                    <div class="col-sm-6 mb-4">
                                                        <label class="order-input">
                                                            <span>{{__('order.Your_email')}}</span>
                                                            <input type="email" class="form-control" required name="email" value="{{$order->email ?? old('email')}}" placeholder="email@gmail.com" />
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-6 mb-4">
                                                        <label class="order-input">
                                                            <span>{{__('order.Repeat_email')}}</span>
                                                            <input type="email" class="form-control" autocomplete="off" required name="email_confirmation" value="{{$order->email ?? old('email_confirmation')}}" placeholder="email@gmail.com" />
                                                        </label>
                                                    </div>
                                                    <div class="col-sm-6 mb-4">
                                                        <label class="order-input">
                                                            <span>{{__('order.Your_phone')}}</span>

                                                            <input type="tel" class="form-control" value="{{$order->phone ?? old('phone')}}" id="phone" name="phone" />


                                                        </label>
                                                        {{--
                                                        <vue-tel-input v-model="phone"
                                                                       :required="true"
                                                                       :preferredCountries="['us','uk','fr','de','fi','au','mx','br','sw','es','is']"
                                                        >
                                                        </vue-tel-input>--}}
                                                    </div>
                                                    <div class="col-sm-6 mb-4">
                                                        <label class="order-input">
                                                            <span>{{__('order.Contact_name')}}</span>
                                                            <input type="text" v-model="contact_name" class="form-control" @change="modify = false;fullname();" required name="contact_name" placeholder="John" />
                                                        </label>
                                                    </div>
                                                    <div class="col">
                                                        <label class="order-input">
                                                            <span>{{__('order.Additionally')}}</span>
                                                            <textarea name="add_info"  class="form-control" placeholder="{{__('order.Additionally_placeholder')}}">{{$order->add_info ?? old('add_info')}}</textarea>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="{{$order->searchUrl}}" class="text-secondary">
                                        <i class="fas fa-angle-left"></i>
                                        {{__('order.back')}}
                                    </a>

                                    <button type="submit" class="btn tm-btn-red">{{__('order.Continue2')}} <i class="fa fa-angle-double-right"></i></button>
                                </div>

                            </form>
                        </div>


                    </div>

                    <div class="col-lg-4 col-xl-3   ">

                            @include("order.right_sidebar", ['seats' => $seats])
                       </div>

                </div>

            </div>
        </div>

    @push('scripts')
        @include('components::ordering_js')
    @endpush
@endsection