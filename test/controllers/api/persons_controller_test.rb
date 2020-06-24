require 'test_helper'

class Api::PersonsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_persons_index_url
    assert_response :success
  end

  test "should get update" do
    get api_persons_update_url
    assert_response :success
  end

end
