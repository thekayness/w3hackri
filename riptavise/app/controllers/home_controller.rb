class HomeController < ApplicationController
  def index
  end

  def trips
  	@trips = Trip.all();
    render json: @trips
  end

end
