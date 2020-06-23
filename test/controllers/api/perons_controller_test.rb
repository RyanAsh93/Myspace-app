require 'test_helper'

class Api::PeronsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_perons_index_url
    assert_response :success
  end

  test "should get update" do
    get api_perons_update_url
    assert_response :success
  end

end
