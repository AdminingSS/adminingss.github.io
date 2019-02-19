<a name="pass"></a>
<div id="order-passengers-accordion" class="order-passengers" v-if="!details">
    @for($k = 0; $k < $order->amount; $k++)
        <div class="order-passenger">
            <div class="order-passenger-top" id="pass_{{$k}}" data-toggle="collapse" data-target="#passengerCollapse{{$k}}">
                <div class="container-fluid">
                        <h6 class="mb-0">
                            @php
                                echo '{{full_name['.$k.']}}';
                            @endphp
                            </h6>
                </div>
            </div>

            <div id="passengerCollapse{{$k}}" class="collapse @if($k==0) show @endif" data-parent="#order-passengers-accordion">
                <div class="order-passenger-info">
                    <div class="container-fluid">
                        <div class="order-passenger-inputs mb-4">
                            <div class="row align-items-end">
                                @if(sizeof($users) > 0)
                                    <div class="col-sm-8 col-lg-8 mb-4">
                                        <label class="order-input order-choose">
                                            <span>{{ __('order.Select_passenger') }}</span>
                                            <input type="hidden" id="u_{{$k}}" @input="setData" />
                                            <select onchange="setPassenger($(this).val(), {{$k}})" id="sp_{{$k}}" class="order-select select2-hidden-accessible" autocomplete="off">
                                                <option value="">----</option>
                                                @foreach($users as $key=>$v)
                                                    <option value="{{$key}}">
                                                        {{$v["first_name"]}} {{$v["middle_name"]}} {{$v["last_name"]}} {{$v["birthday"]}} {{$v["citizenship"]}} {{$v["passport"]}}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </label>
                                    </div>
                                    <div class="col-sm-4 col-lg-4 mb-4">
                                       <button class="btn btn-clear" type="button" @click="clearPassenger({{$k}})">{{__('order.clear')}}</button>
                                    </div>
                                @endif

                                <div class="col-sm-6 col-lg-4 mb-4"><label class="order-input">
                                    <span>{{__('order.First_name')}}</span>
                                    <input class="form-control" name="seat[{{$k}}][first_name]" id="fn_{{$k}}" v-model="first_name[{{$k}}]" maxlength="255" required type="text" placeholder="John" />
                                        <button type="button" class="close" aria-label="{{__('layout.Close')}}" @click="clear_item({{$k}}, 'first_name')">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </label></div>
                                <div class="col-sm-6 col-lg-4 mb-4"><label class="order-input">
                                    <span>{{__('order.Middle_name')}}</span>
                                    <input class="form-control" name="seat[{{$k}}][middle_name]" id="mn_{{$k}}" v-model="middle_name[{{$k}}]" maxlength="255" type="text" placeholder="Alexander" />
                                        <button type="button" class="close" aria-label="{{__('layout.Close')}}"  @click="clear_item({{$k}}, 'middle_name')">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </label></div>
                                <div class="col-sm-6 col-lg-4 mb-4"><label class="order-input">
                                    <span>{{__('order.Last_name')}}</span>
                                    <input class="form-control" name="seat[{{$k}}][last_name]" id="ln_{{$k}}" v-model="last_name[{{$k}}]" maxlength="255" required type="text" placeholder="Smith" />
                                        <button type="button" class="close" aria-label="{{__('layout.Close')}}"  @click="clear_item({{$k}}, 'last_name')">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </label></div>
                                <div class="col-sm-6 col-lg-4 mb-4"><label class="order-input">
                                    <span>{{__('order.Passport_number')}}</span>
                                    <input class="form-control" name="seat[{{$k}}][passport]" maxlength="255" required type="text" value="{{$order->ticket_data[$k]['passport'] ?? old('seat.'.$k.'.passport')}}" placeholder="P-12345678" />
                                        <button type="button" class="close" aria-label="{{__('layout.Close')}}"  @click="clear_item({{$k}}, 'passport')">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </label></div>
                                <div class="col-sm-6 col-lg-4 mb-4">
                                    <label class="order-input">
                                    <span>{{ __('email.Citizenship') }}</span>
                                    <treeselect
                                            name="seat[{{$k}}][citizenship]"
                                            :multiple="false"
                                            ref="cz{{$k}}"
                                            required
                                            v-model="citizenship[{{$k}}]"
                                            :options="countries"
                                            placeholder="{{ __('email.Citizenship') }}"

                                    />
                                </label></div>
                                <div class="col-sm-6 col-lg-4 mb-4">
                                <label class="order-input order-choose">
                                    <span>{{ __('email.Gender') }}</span>
                                    <select required  class="order-select select2-hidden-accessible" autocomplete="off" id="sex{{$k}}" name="seat[{{$k}}][sex]">
                                        <option value="">----</option>
                                        <option value="male" @if((isset($order->ticket_data[$k]['sex']) && $order->ticket_data[$k]['sex'] == 'male') || (old('seat.'.$k.'.sex') && old('seat.'.$k.'.sex') == 'male') ) selected="selected" @endif >{{ __('order.MALE') }}</option>
                                        <option value="female" @if((isset($order->ticket_data[$k]['sex']) && $order->ticket_data[$k]['sex'] == 'female') || (old('seat.'.$k.'.sex') && old('seat.'.$k.'.sex') == 'female')) selected="selected" @endif >{{ __('order.FEMALE') }}</option>
                                    </select>
                                    <button type="button" class="close" aria-label="{{__('layout.Close')}}" onclick="$('#sex{{$k}}').val('').trigger('change')">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </label>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <label class="order-input date-of-birth">
                                        <span>{{__('order.Date_birth')}}</span>
                                     <input type="text" required="required"
                                                     name="seat[{{$k}}][birthday]"
                                                     autocomplete="off"
                                                    readonly
                                                    id="brf{{$k}}"
                                                     placeholder="31.12.1970"
                                                    class="date-of-birth-input form-control"
                                                     value="{{$order->ticket_data[$k]['birthday'] ?? old('seat.'.$k.'.birthday')}}"
                                                     />
                                        <button type="button" class="close" aria-label="{{__('layout.Close')}}"  @click="clear_item({{$k}}, 'birthday')">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </label></div>


                            </div>
                        </div>
                        <div>
                            <button class="btn tm-btn-red" id="saveb_{{$k}}" type="button" @click="savePassenger({{$k}})">{{__('order.Save')}}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endfor
</div>