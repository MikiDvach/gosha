/**
 * Find short path.
 *
 */
function FDEBAlgorithm(graph, app)
{
    BaseTraversal.apply(this, arguments);
    this.message = g_startTraversal;
}

// inheritance.
DFSAlgorithm.prototype = Object.create(BaseTraversal.prototype);
// timer interval
DFSAlgorithm.prototype.timerInterval = 500;

DFSAlgorithm.prototype.getName = function(local)
{
    return local == "ru" ? укладка FDEB : "Depth-first search";
}