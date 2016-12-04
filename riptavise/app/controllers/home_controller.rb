require 'pry'
class HomeController < ApplicationController
	skip_before_action :verify_authenticity_token
  def index
  end

  # def trips
  # 	# @trips = StgVehicleUpdate.where(:)
  # 	render
  # end

  def tripsByRoute
  	@trips = Trip.find(params[:route_id])
    render json: @trips
  end

  def shapes
  	@shapes = Shape.all().group_by(&:shape_id)
  	render json: @shapes
  end

  def shape
  	@shape = Shape.where(:shape_id => params[:shape_id])
  	binding.pry
  	render json: @shape
  end

  def stops
  	@stops = Stop.all()
  	render json: @stops
  	# binding.pry
  end



end
