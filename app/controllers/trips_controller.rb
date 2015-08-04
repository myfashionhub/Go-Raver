class TripsController < ApplicationController

  def create
    params[:raver_id] = current_raver.id
    trip_id = Trip.create_new(params)
    redirect_to "/trips/#{trip_id}"
  end

  def show
    @raver    = current_raver
    @trip     = Trip.find(params[:id])
    @festival = Festival.find(@trip.festival_id)
    flight    = Flight.find_by(trip_id: @trip.id)

    respond_to do |format|
      format.html
      format.json do
        render json: {
          trip: @trip, flight: flight, lineup: @trip.lineup
        }
      end
    end
  end

  def update
    trip = Trip.find(params[:id])

    if params[:lineup]
      trip.update(lineup: params[:lineup])
    else
      trip.update(
        from_airport: params[:from_airport],
        to_airport: params[:to_airport],
        start_date: params[:start_date],
        end_date: params[:end_date]
      )
    end

    render json: { msg: "Updated trip" }.to_json
  end


  def destroy
    trip = Trip.find(params[:id])
    trip.destroy
    render json: trip.to_json
  end

end
