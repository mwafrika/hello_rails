class ApiController < ApplicationController
  include Response

  def random_greeting
    greeting = Message.find(Message.pluck(:id).sample)
    json_response({ message: greeting })
  end
end
