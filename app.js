var app = angular.module('myApp', []);
            app.controller('myCtrl', function ($scope) {
            $scope.courseList = [
            {
                "cid": 1,
                "course": "Drawing and Painting" 
            },
            {
                "cid": 2,
                "course": "Sculpture and Modeling"
            }, 
            {
                "cid": 3,
                "course": "Interior Decoration"
            },
            {
                "cid": 4,
                "course": "Portrait Painting"
            },
            {
                "cid": 5,
                "course": "Ceramic"
            },
            {
                "cid": 6,
                "course": "LandscapePainting"
            }];
            $scope.checkSelection = function () {
                if ($scope.courses != "" && $scope.courses != undefined)
                $scope.msg = '';
                //if ($scope.courses != "" && $scope.courses != undefined)
                else
                $scope.msg = 'Please select a Course';
            }
            $scope.records = []
            $scope.finalTable = false;
            $scope.submitFunc = function (){
                //$scope.formData = {};
                $scope.finalText = "Form Submitted Successfully!"
                /*$scope.FirstName = "First Name";
                $scope.LastName = "Last Name";
                $scope.EmailID = "Email ID";
                $scope.SelectedCourse = "Selected Course";*/
                $scope.finalTable = true;
                $scope.records.push({
                    'fname': $scope.fname,
                    'lname': $scope.lname,
                    'email': $scope.email,
                    'course': $scope.courses
                });
                $scope.fname = '';
                $scope.lname = '';
                $scope.color = '';
                $scope.age = '';
                $scope.email = '';
                $scope.contact = '';
                $scope.add = '';
                $scope.mom = '';
                $scope.dad = '';
                $scope.courses = '';
            }
            $scope.reset = function() {
                //$scope.formData = {};
                $scope.fname = '';
                $scope.lname = '';
                $scope.color = '';
                $scope.age = '';
                $scope.email = '';
                $scope.contact = '';
                $scope.add = '';
                $scope.mom = '';
                $scope.dad = '';
                $scope.courses = '';
                $scope.form1.$setPristine();
                $scope.msg = 'Please select a Course';
                $scope.finalText = ""
              }
        });