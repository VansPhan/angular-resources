(function() {
	angular
		.module("grumbles")
		.factory("GrumbleFactory", [
			"$resource",
			"$http",
			GrumbleFactoryFunction
		]);

		function GrumbleFactoryFunction($resource, $http) {
			return $http("https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/21418698?api_key=d4095fd1-ec30-4403-8db7-fdacebef9b17");
		}
}());