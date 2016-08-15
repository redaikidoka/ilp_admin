var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    return NameListService;
})();
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6WyJOYW1lTGlzdFNlcnZpY2UiLCJOYW1lTGlzdFNlcnZpY2UuY29uc3RydWN0b3IiLCJOYW1lTGlzdFNlcnZpY2UuZ2V0IiwiTmFtZUxpc3RTZXJ2aWNlLmFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7UUFDRUMsVUFBS0EsR0FBR0E7WUFDTkEsaUJBQWlCQTtZQUNqQkEsY0FBY0E7WUFDZEEsYUFBYUE7WUFDYkEsY0FBY0E7U0FDZkEsQ0FBQ0E7SUFRSkEsQ0FBQ0E7SUFOQ0QsNkJBQUdBLEdBQUhBO1FBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQUNERiw2QkFBR0EsR0FBSEEsVUFBSUEsS0FBYUE7UUFDZkcsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0hILHNCQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFkWSx1QkFBZSxrQkFjM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcbiAgbmFtZXMgPSBbXG4gICAgJ0Vkc2dlciBEaWprc3RyYScsXG4gICAgJ0RvbmFsZCBLbnV0aCcsXG4gICAgJ0FsYW4gVHVyaW5nJyxcbiAgICAnR3JhY2UgSG9wcGVyJ1xuICBdO1xuXG4gIGdldCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gIH1cbiAgYWRkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnB1c2godmFsdWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=