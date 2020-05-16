/**
 *  Place here all tests constans.
 *
 */


var g_textsSelectAndMove = "Drag objects";
var g_moveCursorForMoving = "Move cursor";
var g_clickToAddVertex = "Click to add vertex";
var g_selectFisrtVertexToConnect = "Select first vertex to connect";
var g_selectSecondVertexToConnect = "Select second vertex to connect";
var g_selectStartVertexForShortPath = "Select start vertex for shortest path";
var g_selectFinishVertexForShortPath = "Select finish vertex for shortest path";
var g_shortestPathResult = "Shortest path is %d";
var g_pathNotExists = "Path does not exists";
var g_selectObjectToDelete = "Select object to delete";


var g_addEdge = "Add edge";
var g_orintEdge = "Orient";
var g_notOrintEdge = "not Orient";

var g_adjacencyMatrixText = "Adjacency Matrix";
var g_save   = "Save";
var g_cancel = "Cancel";
var g_save_graph = "Save Graph";

var g_shortestDistance = "lowest-distance is ";
var g_incidenceMatrixText = "Incidence Matrix";

var g_save_dialog = "Save dialog";
var g_close       = "close";
var g_sickConnectedComponent = "Sick connected component is ";
var g_connectedComponent = "Connected component is ";


var g_what_do_you_think = "What do you think about site?";
var g_name = "Name";
var g_feedback = "Feedback";
var g_send = "Send";
var g_write_to_us = "Write to us";	        

var g_fixMatrix      = "Fix matrix";
var g_readMatrixHelp = "Matrix format help";
var g_matrixWrongFormat = "Matrix is wrong";

var g_save_image_dialog = "Save graph image";

var g_fullReport = "Full report";

var g_shortReport = "Short report";

var g_hasEulerianLoop = "Graph has Eulerian Loop";
var g_hasNotEulerianLoop  = "Graph has not Eulerian Loop";

var g_hasEulerianPath = "Graph has Eulerian Path";
var g_hasNotEulerianPath = "Graph has not Eulerian Path";

var g_processing = "Processing...";

var g_customEnumVertex = "Custom";
var g_addVertex = "Add vertex";

var g_renameVertex = "Rename vertex";
var g_rename = "Rename";

var g_language = "en";

var g_editWeight = "Edit weight";

var g_noWeight = "No weight";
var g_groupRename = "Group rename";
var g_vote = "Vote";

var g_recommendAlgorithm = "Recommend algorithm";

var g_graphOfMinDist = "Graph of minimal distances.";
var g_checkToSave    = "Check to save";
var g_showDistMatrix = "Show Distance matrix";
var g_minDistMatrixText = "Minimal distances matrix";

var g_selectStartVertexForMaxFlow  = "Select source vertex for max flow";
var g_selectFinishVertexForMaxFlow = "Select sink vertex for max flow";
var g_maxFlowResult = "Maximum flow from %2 to %3 is %1";
var g_flowNotExists = "Flow from %1 to %2 does not exists";

var g_sourceVertex = "Source";
var g_sinkVertex   = "Sink";

var g_hasHamiltonianLoop = "Graph has Hamiltonian Loop";
var g_hasNotHamiltonianLoop  = "Graph has not Hamiltonian Loop";

var g_hasHamiltonianPath = "Graph has Hamiltonian Path";
var g_hasNotHamiltonianPath = "Graph has not Hamiltonian Path";

var g_startTraversal = "Select start traversal vector";
var g_traversalOrder = "Traversal order: ";

var g_curveEdge      = "Curved edge";

var g_Undo           = "Undo";
var g_default        = "default";
var g_vertexDraw     = "Vertex draw style";
var g_edgeDraw       = "Edge draw style";
var g_backgroundStyle = "Bacgkround style";

var g_GrapsIsMultiMessage   = "Graph is multigraph";
var g_GrapsIsGeneralMessage = "";

function loadTexts()
{
	g_textsSelectAndMove  = document.getElementById("SelectAndMoveObject").innerHTML;
	g_moveCursorForMoving = document.getElementById("MoveCursorForMoving").innerHTML;
	g_clickToAddVertex = document.getElementById("clickToAddVertex").innerHTML;
	g_selectFisrtVertexToConnect = document.getElementById("selectFisrtVertextToConnect").innerHTML;
	g_selectSecondVertexToConnect = document.getElementById("selectSecondVertextToConnect").innerHTML;
	g_selectStartVertexForShortPath = document.getElementById("selectStartShortPathVertex").innerHTML;
	g_selectFinishVertexForShortPath = document.getElementById("selectFinishShortPathVertex").innerHTML;
	g_shortestPathResult = document.getElementById("shortPathResult").innerHTML;
	g_pathNotExists = document.getElementById("pathNotExists").innerHTML;
	g_selectObjectToDelete = document.getElementById("selectObjectToDelete").innerHTML;

	g_addEdge             = document.getElementById("AddEdge").innerHTML;
	g_orintEdge           = document.getElementById("OrintEdge").innerHTML;
	g_notOrintEdge        = document.getElementById("NotOrintdge").innerHTML;

	g_adjacencyMatrixText = document.getElementById("AdjacencyMatrixText").innerHTML;
	g_save   = document.getElementById("Save").innerHTML;
	g_cancel = document.getElementById("Cancel").innerHTML;

    g_shortestDistance = document.getElementById("shortestDist").innerHTML;

    g_incidenceMatrixText = document.getElementById("IncidenceMatrixText").innerHTML;
	
	g_save_dialog = document.getElementById("saveDialogTitle").innerHTML;
	g_close       = document.getElementById("closeButton").innerHTML;

	g_sickConnectedComponent = document.getElementById("sickConnectedComponentResult").innerHTML;
	g_connectedComponent     = document.getElementById("connectedComponentResult").innerHTML;

	g_what_do_you_think = document.getElementById("whatDoYouThink").innerHTML;
	g_name = document.getElementById("name").innerHTML;
	g_feedback = document.getElementById("feedback").innerHTML;
	g_send = document.getElementById("send").innerHTML;
	g_write_to_us = document.getElementById("writeToUs").innerHTML;


	g_fixMatrix      = document.getElementById("fixMatrixButton").innerHTML;
	g_readMatrixHelp = document.getElementById("matrixHelp").innerHTML;
	g_matrixWrongFormat = document.getElementById("wronMatrixTitle").innerHTML;
    
    g_save_image_dialog = document.getElementById("saveImageDialogTitle").innerHTML;
    
    g_fullReport = document.getElementById("fullReport").innerHTML;
    g_shortReport = document.getElementById("shortReport").innerHTML;
    
    
    g_hasEulerianLoop    = document.getElementById("hasEulerianLoop").innerHTML;
    g_hasNotEulerianLoop = document.getElementById("hasNotEulerianLoop").innerHTML;
    
    g_processing = document.getElementById("processing").innerHTML;
    
    g_customEnumVertex = document.getElementById("customEnumVertex").innerHTML;
    
    g_addVertex = document.getElementById("addVertexText").innerHTML;
    
    g_renameVertex = document.getElementById("renameVertex").innerHTML;
    g_rename = document.getElementById("renameText").innerHTML;
    
    g_language = document.getElementById("currentLanguage").innerHTML;
    
    g_editWeight = document.getElementById("editWeight").innerHTML;
    
    g_noWeight = document.getElementById("noWeight").innerHTML;
    g_groupRename = document.getElementById("groupeRenameText").innerHTML;
    g_vote = document.getElementById("voteText").innerHTML;
    
    g_recommendAlgorithm = document.getElementById("recommend_algorithm").innerHTML;
    
    g_hasEulerianPath    = document.getElementById("hasEulerianPath").innerHTML;
    g_hasNotEulerianPath = document.getElementById("hasNotEulerianPath").innerHTML;
    
    g_graphOfMinDist = document.getElementById("graphOfMinDist").innerHTML;
    g_checkToSave    = document.getElementById("checkToSave").innerHTML;
    g_showDistMatrix = document.getElementById("showDistMatrix").innerHTML;
    g_minDistMatrixText = document.getElementById("distMatrixText").innerHTML;
    
    g_selectStartVertexForMaxFlow  = document.getElementById("selectStartVertexForMaxFlow").innerHTML;
    g_selectFinishVertexForMaxFlow = document.getElementById("selectFinishVertexForMaxFlow").innerHTML;
    g_maxFlowResult = document.getElementById("maxFlowResult").innerHTML;
    g_flowNotExists = document.getElementById("flowNotExists").innerHTML;
    
    g_sourceVertex = document.getElementById("sourceVertex").innerHTML;
    g_sinkVertex   = document.getElementById("sinkVertex").innerHTML;
    
    g_hasHamiltonianLoop    = document.getElementById("hasHamiltonianLoop").innerHTML;
    g_hasNotHamiltonianLoop = document.getElementById("hasNotHamiltonianLoop").innerHTML;

    g_hasHamiltonianPath    = document.getElementById("hasHamiltonianPath").innerHTML;
    g_hasNotHamiltonianPath = document.getElementById("hasNotHamiltonianPath").innerHTML;
    
    g_startTraversal = document.getElementById("startTraversal").innerHTML;
    g_traversalOrder = document.getElementById("traversalOrder").innerHTML;
    
    g_curveEdge = document.getElementById("curveEdge").innerHTML;
    
    g_Undo       = document.getElementById("undoTranslate").innerHTML;
    g_save_graph = document.getElementById("saveGraph").innerHTML;
    g_default    = document.getElementById("default").innerHTML;
    g_vertexDraw = document.getElementById("vertexDrawStyle").innerHTML;
    g_edgeDraw   = document.getElementById("edgeDrawStyle").innerHTML;
    
    g_backgroundStyle = document.getElementById("backgroundStyle").innerHTML;
    
    g_GrapsIsMultiMessage   = document.getElementById("graphIsMultiMessage").innerHTML;
    g_GrapsIsGeneralMessage = document.getElementById("graphIsGeneralMessage").innerHTML;
}
function Point(x, y){
    this.x = x || 0;
    this.y = y || 0;
};
Point.prototype.x = null;
Point.prototype.y = null;
Point.prototype.add = function(v){
    return new Point(this.x + v.x, this.y + v.y);
};
Point.prototype.addValue = function(v){
    return new Point(this.x + v, this.y + v);
};
Point.prototype.clone = function(){
    return new Point(this.x, this.y);
};
Point.prototype.degreesTo = function(v){
    var dx = this.x - v.x;
    var dy = this.y - v.y;
    var angle = Math.atan2(dy, dx); // radians
    return angle * (180 / Math.PI); // degrees
};
Point.prototype.distance = function(v){
    return Math.sqrt(this.distanceSqr(v));
};
Point.prototype.distanceSqr = function(v){
    var x = this.x - v.x;
    var y = this.y - v.y;
    return x * x + y * y;
};
Point.prototype.equals = function(toCompare){
    return this.x == toCompare.x && this.y == toCompare.y;
};
Point.prototype.interpolate = function(v, f){
    return new Point((this.x + v.x) * f, (this.y + v.y) * f);
};
Point.prototype.length = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
Point.prototype.normalize = function(thickness){
    var l = this.length();
    this.x = this.x / l * thickness;
    this.y = this.y / l * thickness;
    return new Point(this.x, this.y);
};
Point.prototype.normalizeCopy = function(thickness){
    var l = this.length();
    return new Point(this.x / l * thickness, this.y / l * thickness);
};
Point.prototype.orbit = function(origin, arcWidth, arcHeight, degrees){
    var radians = degrees * (Math.PI / 180);
    this.x = origin.x + arcWidth * Math.cos(radians);
    this.y = origin.y + arcHeight * Math.sin(radians);
};
Point.prototype.rotate = function(center, degrees){
    var radians = degrees * (Math.PI / 180);
    offset = this.subtract(center);
    this.x = offset.x * Math.cos(radians) - offset.y * Math.sin(radians);
    this.y = offset.x * Math.sin(radians) + offset.y * Math.cos(radians);
    this.x = this.x + center.x;
    this.y = this.y + center.y;
};

Point.prototype.offset = function(dx, dy){
    this.x += dx;
    this.y += dy;
};
Point.prototype.subtract = function(v){
    return new Point(this.x - v.x, this.y - v.y);
};
Point.prototype.subtractValue = function(value){
    return new Point(this.x - value, this.y - value);
};
Point.prototype.multiply = function(value){
    return new Point(this.x * value, this.y * value);
};
Point.prototype.toString = function(){
    return "(x=" + this.x + ", y=" + this.y + ")";
};

Point.prototype.normal = function(){
    return new Point(-this.y, this.x);
};

Point.prototype.min = function(point)
{
    return new Point(Math.min(this.x, point.x), Math.min(this.y, point.y));
};

Point.prototype.max = function(point)
{
    return new Point(Math.max(this.x, point.x), Math.max(this.y, point.y));
};

Point.prototype.inverse = function()
{
    return new Point(-this.x, -this.y);
};
 
Point.interpolate = function(pt1, pt2, f){
    return new Point(pt1.x * (1.0 - f) + pt2.x * f, pt1.y * (1.0 - f) + pt2.y * f);
};
Point.polar = function(len, angle){
    return new Point(len * Math.cos(angle), len * Math.sin(angle));
};
Point.distance = function(pt1, pt2){
    var x = pt1.x - pt2.x;
    var y = pt1.y - pt2.y;
    return Math.sqrt(x * x + y * y);
};

Point.center = function(pt1, pt2){
    return new Point((pt1.x + pt2.x) / 2.0, (pt1.y + pt2.y) / 2.0);
};

Point.toString = function(){
	return x + " " + y;
}

function Rect(minPoint, maxPoint){
    this.minPoint = minPoint;
    this.maxPoint = maxPoint;
};

Rect.prototype.center = function()
{
    return Point.center(this.minPoint, this.maxPoint);
};

Rect.prototype.size = function()
{
    return this.maxPoint.subtract(this.minPoint);
};
/**
 * This is edge model
 *
 */

var EdgeModels = {"line": 0, "cruvled" : 1};
                
function EdgeModel()
{
    this.width = 4;
    this.type  = EdgeModels.line;
    this.curvedValue = EdgeModel.prototype.defaultCruved;
    this.default = true;
}

EdgeModel.prototype.defaultCruved = 0.1;

EdgeModel.prototype.SaveToXML = function ()
{
    return "model_width=\"" + this.width + "\" " +
	       "model_type=\""  + this.type   + "\" " +
	       "model_curvedValue=\""  + this.curvedValue + "\" "
           "model_default=\""  + this.default + "\" ";
}

EdgeModel.prototype.LoadFromXML = function (xml, graph)
{
	this.width = xml.attr('model_width') == null ? this.width : parseFloat(xml.attr("model_width"));
	this.type  = xml.attr('model_type')  == null ? this.type  : xml.attr("model_type");
	this.curvedValue  = xml.attr('model_curvedValue')  == null ? this.curvedValue : parseFloat(xml.attr("model_curvedValue"));
    this.default = xml.attr('model_default') == null ? this.default : parseFloat(xml.attr("model_default"));
}

EdgeModel.prototype.GetCurvedPoint = function(position1, position2, t)
{
    var points = this.GetBezierPoints(position1, position2);
    var firstBezierPoint  = points[0];  
    var secondBezierPoint = points[1];
    
    var B0_t = Math.pow(1-t, 3);
    var B1_t = 3 * t * Math.pow(1-t, 2);
    var B2_t = 3 * t*t * (1-t)
    var B3_t = t*t*t;
    
    var ax = position1.x;
    var ay = position1.y;
    var dx = position2.x;
    var dy = position2.y;
    var bx = firstBezierPoint.x;
    var by = firstBezierPoint.y;
    var cx = secondBezierPoint.x;
    var cy = secondBezierPoint.y;
    
    var px_t = (B0_t * ax) + (B1_t * bx) + (B2_t * cx) + (B3_t * dx);
    var py_t = (B0_t * ay) + (B1_t * by) + (B2_t * cy) + (B3_t * dy);
    
    return new Point(px_t, py_t);
}

EdgeModel.prototype.GetBezierPoints = function(position1, position2)
{
    var direction = position2.subtract(position1); 
    var delta     = direction.length();
    direction.normalize(1.0);  
    var normal = direction.normal();
    
    var deltaOffsetPixels = delta * this.curvedValue;
    var yOffset = normal.multiply(deltaOffsetPixels);
    var firstBezierPointShift  = (direction.multiply(delta * 0.2)).add(yOffset); 
    var secondBezierPointShift = (direction.multiply(-delta * 0.2)).add(yOffset); 
    var firstBezierPoint  = position1.add(firstBezierPointShift);  
    var secondBezierPoint = position2.add(secondBezierPointShift);
    
    return [firstBezierPoint, secondBezierPoint];
}


EdgeModel.prototype.HitTest = function(position1, position2, mousePos)
{
    if (this.type == EdgeModels.line)
        return this.HitTestLine(position1, position2, mousePos);
    else if (this.type == EdgeModels.cruvled)
        return this.HitTestCurved(position1, position2, mousePos);
    
    return false;
}


EdgeModel.prototype.HitTestLine = function(position1, position2, mousePos, factor)
{
    if (factor === undefined) 
    {
      factor = 1.0;
    }
    
    var pos1 = position1;
    var pos2 = position2;
    var pos0 = mousePos;
		
    var r1  = pos0.distance(pos1);
    var r2  = pos0.distance(pos2);
    var r12 = pos1.distance(pos2);
		
    if (r1 >= (new Point(r2, r12)).length() || r2 >= (new Point(r1,r12)).length())
    {
    }
    else		
    { 
        var distance = ((pos1.y - pos2.y) * pos0.x + (pos2.x - pos1.x) * pos0.y + (pos1.x * pos2.y - pos2.x * pos1.y)) / r12;

        if (Math.abs(distance) <= this.width * 1.5 * factor)
        {
            return true;
        }
    }
    
    return false;
}

EdgeModel.prototype.HitTestCurved = function(position1, position2, mousePos)
{
    var interval_count = position1.distance(position2) / 100 * 30;
    
    var start = position1;
    for (var i = 0; i < interval_count; i ++)
    {
        var finish = this.GetCurvedPoint(position1, position2, i / interval_count);
        
        if (this.HitTestLine(start, finish, mousePos, 2.0))
            return true;
        
        start = finish;
    }
    
    return false;
}

EdgeModel.prototype.ChangeCurvedValue = function (delta)
{
    if (this.type == EdgeModels.line)
    {
        this.type = EdgeModels.cruvled;
        this.curvedValue = 0.0;
    }

    this.curvedValue = this.curvedValue + delta;
    
    if (Math.abs(this.curvedValue) <= 0.01)
        this.type = EdgeModels.line;
    
    this.default = false;
}
/**
 * This is graph model used for hit test and draw.
 *
 */


function VertexModel()
{
    this.diameter = 30;
}
/**
 * Base node class.
 *
 */

 
function BaseVertex(x, y, vertexEnumType)
{
    this.position = new Point(x, y);
    this.id       = 0;
    this.mainText = "";
    this.upText   = "";
    this.vertexEnumType = vertexEnumType;
    this.model    = new VertexModel();
};

BaseVertex.prototype.position = new Point(0, 0);

BaseVertex.prototype.SaveToXML = function ()
{
	return "<node " + 
	       "positionX=\""  + this.position.x   + "\" " +
	       "positionY=\""  + this.position.y   + "\" " +
	       "id=\""         + this.id   + "\" " +
	       "mainText=\""   + this.mainText + "\" " +
	       "upText=\""     + this.upText   + "\" " +
		"></node>";       
		                 
}

BaseVertex.prototype.LoadFromXML = function (xml)
{
    this.position = new Point(parseFloat(xml.attr('positionX')), parseFloat(xml.attr('positionY')));
    this.id       = parseInt(xml.attr('id'));
    this.mainText = xml.attr('mainText');
    this.upText   = xml.attr('upText');
}

BaseVertex.prototype.SetId = function (id)
{
    this.id       = id;
    this.mainText = this.vertexEnumType.GetVertexText(id);		                 
}

BaseVertex.prototype.diameterFactor = function ()
{
    return 1.0 + (this.mainText.length ? this.mainText.length / 8.0 : 0);
}
/**
 * This is base arc.
 *
 *
 */

function BaseEdge(vertex1, vertex2, isDirect, weight)
{
    this.vertex1    = vertex1;
    this.vertex2    = vertex2;
    this.arrayStyleStart  = "";
    this.arrayStyleFinish = "";
    
    this.isDirect  = isDirect;
    this.weight    = 0;
    this.text      = "";
    this.useWeight = false;
    this.id        = 0;
    this.model = new EdgeModel();
    
    if (weight !== undefined)
      this.SetWeight(weight);
}

BaseEdge.prototype.SaveToXML = function ()
{
	return "<edge " + 
	       "vertex1=\""     + this.vertex1.id   + "\" " +
	       "vertex2=\""     + this.vertex2.id   + "\" " +
	       "isDirect=\""   + this.isDirect + "\" " +
	       "weight=\""     + this.weight   + "\" " +
	       "useWeight=\""  + this.useWeight + "\" " +
	       "id=\""         + this.id + "\" " +
           "text=\""       + this.text + "\" " +
           "arrayStyleStart=\""       + this.arrayStyleStart + "\" " +
           "arrayStyleFinish=\""       + this.arrayStyleFinish + "\" " +
           this.model.SaveToXML() + 
		"></edge>";       
}

BaseEdge.prototype.LoadFromXML = function (xml, graph)
{
    var attr       =    xml.attr('vertex1');
	this.vertex1   =    graph.FindVertex(parseInt(typeof attr !== 'undefined' ? attr : xml.attr('graph1')));
    var attr       =    xml.attr('vertex2');
	this.vertex2   =    graph.FindVertex(parseInt(typeof attr !== 'undefined' ? attr : xml.attr('graph2')));
	this.isDirect  =    xml.attr('isDirect') == "true";
	this.weight    =    parseFloat(xml.attr('weight'));
	this.hasPair   =    xml.attr('hasPair') == "true";
	this.useWeight =    xml.attr('useWeight') == "true";
    this.id        =    parseInt(xml.attr('id'));
    this.text      =    xml.attr("text") == null ? "" : xml.attr("text");
    this.arrayStyleStart      =   xml.attr("arrayStyleStart") == null ? "" : xml.attr("arrayStyleStart");
    this.arrayStyleFinish      =  xml.attr("arrayStyleFinish") == null ? "" : xml.attr("arrayStyleFinish");
    
    this.model.LoadFromXML(xml);
}

BaseEdge.prototype.GetPixelLength = function ()
{
    if (this.vertex1 == this.vertex2)
    {
        return (new CommonEdgeStyle()).sizeOfLoop * 2 * Math.PI;
    }
    else
    {
        return Point.distance(this.vertex1.position, this.vertex2.position);
    }
}

BaseEdge.prototype.GetWeight = function ()
{
    return this.useWeight ? this.weight : 1;
}

BaseEdge.prototype.GetText = function ()
{
    return this.text.length > 0 ? this.text : (this.useWeight ? this.weight.toString() : "");
}

BaseEdge.prototype.GetStartEdgeStyle = function ()
{
    return this.arrayStyleStart;
}

BaseEdge.prototype.GetFinishEdgeStyle = function ()
{
    return (this.arrayStyleFinish != "" ? this.arrayStyleFinish : (this.isDirect ? "arrow" : ""));
}

BaseEdge.prototype.HitTest = function (pos)
{
    var positions = this.GetEdgePositionsShift();
    return this.model.HitTest(positions[0], positions[1], pos);
}

BaseEdge.prototype.GetEdgePositionsShift = function()
{
    return this.GetEdgePositions();
}

BaseEdge.prototype.GetEdgePositions = function()
{
    var position1 = this.vertex1.position;
    var position2 = this.vertex2.position;
    var diameter1 = this.vertex1.model.diameter;
    var diameter2 = this.vertex2.model.diameter;

    var direction = position1.subtract(position2);
    
    var direction1 = direction;
    var direction2 = direction;
    var d1        = diameter1;
    var d2        = -diameter2;
    
    if (this.model.type == EdgeModels.cruvled)
    {
        var dist   = position1.distance(position2);
        var point1  = this.model.GetCurvedPoint(position1, position2, 10.0 / dist);
        direction1  = position1.subtract(point1);
        
        var point2  = this.model.GetCurvedPoint(position1, position2, 1.0 - 10.0 / dist);
        direction2  = position2.subtract(point2);
        
        d2         = diameter2;
    }

    direction1.normalize(1.0);
    direction1 = direction1.multiply(0.5);
    direction2.normalize(1.0);
    direction2 = direction2.multiply(0.5);

    var res = [];
    res.push(position1.subtract(direction1.multiply(d1)));
    res.push(position2.subtract(direction2.multiply(d2)));
    return res;
}

BaseEdge.prototype.SetWeight = function(weight)
{
	var useWeight = false;
	if (!isNaN(parseInt(weight, 10)))
	{
		useWeight = true;
	}
	weight = (!isNaN(parseInt(weight, 10)) && weight >= 0) ? weight : 1;
    
    this.weight    = Number(weight);
    this.useWeight = useWeight;
}/**
 * Graph drawer.
 */
 
// Common style of Graphs.
function CommonVertexStyle()
{
  this.lineWidth   = 2;
  this.strokeStyle = '#c7b7c7';
  this.fillStyle   = '#68aeba';
  this.mainTextColor = '#f0d543';
}

function CommonPrintVertexStyle()
{
  CommonVertexStyle.apply(this, arguments);
    
  this.lineWidth   = 2;
  this.strokeStyle = '#000000';
  this.fillStyle   = '#FFFFFF';
  this.mainTextColor = '#000000';
}

// Selected style of Graphs.
function SelectedVertexStyle0()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle = '#f0d543';
	this.mainTextColor  = '#f0d543';
	this.fillStyle   = '#c7627a';
}

SelectedVertexStyle0.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle1()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle = '#7a9ba0';
	this.mainTextColor  = '#7a9ba0';
	this.fillStyle   = '#534641';
}

SelectedVertexStyle1.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle2()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle ='#8C4C86';
	this.mainTextColor  = '#8C4C86';
	this.fillStyle   = '#253267';
}

SelectedVertexStyle2.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle3()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle = '#6188FF';
	this.mainTextColor  = '#6188FF';
	this.fillStyle   = '#E97CF9';
}

SelectedVertexStyle3.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle4()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle = '#C6B484';
	this.mainTextColor  = '#C6B484';
	this.fillStyle   = '#E0DEE1';
}

SelectedVertexStyle4.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle5()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle = '#FF6200';
	this.mainTextColor  = '#FF6200';
	this.fillStyle   = '#0F4FA8';
}

SelectedVertexStyle5.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle6()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle   = '#8CA336';
	this.mainTextColor = '#8CA336';
	this.fillStyle     = '#9C344C';
}

SelectedVertexStyle6.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle7()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle   = '#B59E22';
	this.mainTextColor = '#B59E22';
	this.fillStyle     = '#22387A';
}

SelectedVertexStyle7.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle8()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle   = '#08806C';
	this.mainTextColor = '#08806C';
	this.fillStyle     = '#CA980D';
}

SelectedVertexStyle8.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedVertexStyle9()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle   = '#AA8134';
	this.mainTextColor = '#AA8134';
	this.fillStyle     = '#492A73';
}

SelectedVertexStyle9.prototype = Object.create(CommonVertexStyle.prototype);

function SelectedPrintVertexStyle()
{
	CommonVertexStyle.apply(this, arguments);

	this.strokeStyle   = '#000000';
	this.mainTextColor = '#000000';
	this.fillStyle     = '#AAAAAA';
}

SelectedPrintVertexStyle.prototype = Object.create(CommonVertexStyle.prototype);

var DefaultSelectedGraphStyles = [new SelectedVertexStyle0(), new SelectedVertexStyle1(),
	new SelectedVertexStyle2(), new SelectedVertexStyle3(), new SelectedVertexStyle4(), new SelectedVertexStyle5(), new SelectedVertexStyle6(), new SelectedVertexStyle7(), new SelectedVertexStyle8(), new SelectedVertexStyle9()];

var DefaultPrintSelectedGraphStyles = [new SelectedPrintVertexStyle()];

function BaseVertexDrawer(context)
{ 
  this.context = context;
}

BaseVertexDrawer.prototype.Draw = function(baseGraph, graphStyle)
{
  this.SetupStyle(graphStyle);
  this.DrawShape(baseGraph);
  this.context.stroke();
  this.context.fill();
  
  this.DrawCenterText(baseGraph.position, baseGraph.mainText, graphStyle.mainTextColor, graphStyle.fillStyle, true, true, 16);
  
  // Top text
  this.DrawCenterText(baseGraph.position.add(new Point(0, - baseGraph.model.diameter / 2.0 - 9.0)), 
	baseGraph.upText, graphStyle.fillStyle, graphStyle.strokeStyle, false, false, 12.0);
/*	
  // Bottom text
  this.DrawCenterText(baseGraph.position.add(new Point(0, + baseGraph.model.diameter / 2.0 + 7.0)), 
	"Text 2", graphStyle.fillStyle, false, 12.0);
*/
}

BaseVertexDrawer.prototype.SetupStyle = function(style)
{
  this.context.lineWidth   = style.lineWidth;
  this.context.strokeStyle = style.strokeStyle;
  this.context.fillStyle   = style.fillStyle;
}

BaseVertexDrawer.prototype.DrawShape = function(baseGraph)
{
  this.context.beginPath();
  this.context.arc(baseGraph.position.x, baseGraph.position.y, baseGraph.model.diameter / 2.0, 0, 2 * Math.PI);
  this.context.closePath();
}

BaseVertexDrawer.prototype.DrawText = function(position, text, color, outlineColor, outline, font)
{
	this.context.fillStyle = color;
	this.context.font = font;
    this.context.lineWidth = 4;
    this.context.strokeStyle = outlineColor;

    if (outline)
    {
        this.context.save();
        this.context.lineJoin = 'round';
        this.context.strokeText(text, position.x, position.y);
        this.context.restore();
    }
    
    this.context.fillText(text, position.x, position.y);
}

BaseVertexDrawer.prototype.DrawCenterText = function(position, text, color, outlineColor, bold, outline, size)
{
	this.context.textBaseline="middle";
	this.context.font = (bold ? "bold " : "") + size + "px sans-serif";
	var textWidth  = this.context.measureText(text).width;	
	this.DrawText(new Point(position.x - textWidth / 2, position.y), text, color, outlineColor, outline, this.context.font);
}

/**
 * Graph drawer.
 */
 
 
function CommonEdgeStyle()
{
	this.strokeStyle = '#c7b7c7';
	this.weightText  = '#f0d543';
 	this.fillStyle   = '#68aeba';
 	this.textPadding = 4;
	this.textStrockeWidth = 2;
 	this.sizeOfLoop = 24;
	this.loopShiftAngel = Math.PI / 6;
}

function CommonPrintEdgeStyle()
{
	CommonEdgeStyle.apply(this, arguments);
    
	this.strokeStyle = '#000000';
	this.weightText  = '#000000';
 	this.fillStyle   = '#FFFFFF';
}

function SelectedEdgeStyle0()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#f0d543';
	this.weightText  = '#f0d543';
	this.fillStyle   = '#c7627a';
}
SelectedEdgeStyle0.prototype = Object.create(CommonEdgeStyle.prototype);

function SelectedEdgeStyle1()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#8FBF83';
	this.weightText  = '#8FBF83';
	this.fillStyle   = '#F9F9D5';
}
SelectedEdgeStyle1.prototype = Object.create(CommonEdgeStyle.prototype);


function SelectedEdgeStyle2()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#8C4C86';
	this.weightText  = '#8C4C86';
	this.fillStyle   = '#253267';
}
SelectedEdgeStyle2.prototype = Object.create(CommonEdgeStyle.prototype);


function SelectedEdgeStyle3()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#6188FF';
	this.weightText  = '#6188FF';
	this.fillStyle   = '#E97CF9';
}
SelectedEdgeStyle3.prototype = Object.create(CommonEdgeStyle.prototype);


function SelectedEdgeStyle4()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#C6B484';
	this.weightText  = '#C6B484';
	this.fillStyle   = '#E0DEE1';
}
SelectedEdgeStyle4.prototype = Object.create(CommonEdgeStyle.prototype);

function SelectedEdgePrintStyle()
{
	CommonEdgeStyle.apply(this, arguments);  

	this.strokeStyle = '#AAAAAA';
	this.weightText  = '#000000';
	this.fillStyle   = '#AAAAAA';
}
SelectedEdgeStyle0.prototype = Object.create(CommonEdgeStyle.prototype);

var DefaultSelectedEdgeStyles      = [new SelectedEdgeStyle0(), new SelectedEdgeStyle1(), 
	new SelectedEdgeStyle2(), new SelectedEdgeStyle3(), new SelectedEdgeStyle4()];

var DefaultPrintSelectedEdgeStyles = [new SelectedEdgePrintStyle()];

function BaseEdgeDrawer(context, drawObjects)
{ 
  if (drawObjects === undefined) 
  {
    drawObjects = null;
  }
    
  this.context = context;
    
  this.drawObject = null;
  this.drawArc = null;
  this.startArrowDiretion  = null;
  this.finishArrowDiretion = null;
  this.textCenterObject    = null;
  this.getPointOnArc       = null;   
    
  if (drawObjects)
  {
    if (drawObjects.hasOwnProperty("drawObject"))
      this.drawObject = drawObjects.drawObject;
    if (drawObjects.hasOwnProperty("drawArc"))
      this.drawArc = drawObjects.drawArc;
    if (drawObjects.hasOwnProperty("startArrowDiretion"))
      this.startArrowDiretion = drawObjects.startArrowDiretion;
    if (drawObjects.hasOwnProperty("finishArrowDiretion"))
      this.finishArrowDiretion = drawObjects.finishArrowDiretion;
    if (drawObjects.hasOwnProperty("textCenterObject"))
      this.textCenterObject = drawObjects.textCenterObject;
    if (drawObjects.hasOwnProperty("getPointOnArc"))
      this.getPointOnArc = drawObjects.getPointOnArc;
  }
}

BaseEdgeDrawer.prototype.Draw = function(baseEdge, arcStyle) 
{
  if (this.drawObject && this.drawObject != this)
  {
    this.drawObject.Draw(baseEdge, arcStyle);
    return;
  }
    
  this.SetupStyle(baseEdge, arcStyle);
    
  var lengthArrow = baseEdge.model.width * 4;
  var widthArrow  = baseEdge.model.width * 2;
  var position1 = baseEdge.vertex1.position;
  var position2 = baseEdge.vertex2.position;
  var direction = position1.subtract(position2); 
  direction.normalize(1.0);
  var positions = baseEdge.GetEdgePositionsShift();
  
  var hasStartStyle  = !position1.equals(position2) && baseEdge.GetStartEdgeStyle() != "";
  var hasFinishStyle = !position1.equals(position2) && baseEdge.GetFinishEdgeStyle() != "";
    
  this.DrawArc (positions[0], positions[1], arcStyle);

  this.context.fillStyle = this.context.strokeStyle;
  this.context.lineWidth = 0;

  if (hasStartStyle)
  {
    this.DrawArrow(positions[0], this.GetStartArrowDiretion(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
  }
  if (hasFinishStyle)
  {
    this.DrawArrow(positions[1], this.GetFinishArrowDiretion(positions[0], positions[1], lengthArrow), lengthArrow, widthArrow);
  }
    
  this.SetupStyle(baseEdge, arcStyle);
    
  if (baseEdge.GetText().length > 0)
  {
	this.DrawWeight(positions[0], positions[1], baseEdge.GetText(), arcStyle, false);
  }
}


BaseEdgeDrawer.prototype.SetupStyle = function(baseEdge, arcStyle)
{
  this.context.lineWidth   = baseEdge.model.width;
  this.context.strokeStyle = arcStyle.strokeStyle;
  this.context.fillStyle   = arcStyle.fillStyle;
  this.sizeOfLoop          = baseEdge.vertex1.model.diameter / 2;
}

BaseEdgeDrawer.prototype.DrawArc = function(position1, position2, arcStyle)
{
  if (this.drawArc && this.drawArc != this)
  {
      this.drawArc.DrawArc(position1, position2, arcStyle);
      return;
  }
    
  if (position1.equals(position2))
  {
    this.context.beginPath();
    this.context.arc(position1.x - Math.cos(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop, 
                     position1.y - Math.sin(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop, arcStyle.sizeOfLoop, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.stroke();
  }
  else
  {
    this.context.beginPath();
    this.context.moveTo(position1.x, position1.y);
    this.context.lineTo(position2.x, position2.y);
    this.context.closePath();
    this.context.stroke();  
  }
}

BaseEdgeDrawer.prototype.DrawWeight = function(position1, position2, text, arcStyle, hasPair)
{ 
  var centerPoint = this.GetTextCenterPoint(position1, position2, hasPair, arcStyle);
        
  this.context.font         = "bold 16px sans-serif";
  this.context.textBaseline = "middle";
  this.context.lineWidth    = arcStyle.textStrockeWidth;
  this.context.fillStyle    = arcStyle.fillStyle;	

  var widthText = this.context.measureText(text).width;

  this.context.beginPath();
  this.context.rect(centerPoint.x - widthText / 2 - arcStyle.textPadding / 2, 
                    centerPoint.y - 8 - arcStyle.textPadding / 2, 
    widthText + arcStyle.textPadding, 16 + arcStyle.textPadding);
  this.context.closePath();
  this.context.fill();
  this.context.stroke ();

	this.context.fillStyle = arcStyle.weightText;	
	this.context.fillText(text, centerPoint.x - widthText / 2, centerPoint.y);
}

BaseEdgeDrawer.prototype.DrawArrow = function(position, direction, length, width) 
{
  var normal = direction.normal();
  
  var pointOnLine = position.subtract(direction.multiply(length));
  var point1 = pointOnLine.add(normal.multiply(width));
  var point2 = pointOnLine.add(normal.multiply(-width));
  
  this.context.beginPath();
  this.context.moveTo(position.x, position.y);
  this.context.lineTo(point1.x, point1.y);
  this.context.lineTo(point2.x, point2.y);
  this.context.lineTo(position.x, position.y);
  this.context.closePath();
  this.context.fill();
}

BaseEdgeDrawer.prototype.GetStartArrowDiretion = function(position1, position2, lengthArrow) 
{
    if (this.startArrowDiretion && this.startArrowDiretion != this)
    {
      return this.startArrowDiretion.GetStartArrowDiretion(position1, position2, lengthArrow);
    }
    
    var direction = position1.subtract(position2);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetFinishArrowDiretion = function(position1, position2, lengthArrow) 
{
    if (this.finishArrowDiretion && this.finishArrowDiretion != this)
    {
      return this.finishArrowDiretion.GetFinishArrowDiretion(position1, position2, lengthArrow);
    }

    var direction = position2.subtract(position1);
    direction.normalize(1.0);
    return direction;
}

BaseEdgeDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle)
{
  if (this.textCenterObject && this.textCenterObject != this)
  {
    return this.textCenterObject.GetTextCenterPoint(position1, position2, hasPair, arcStyle);
  }
    
  var textShift   = Math.min(12 / position1.subtract(position2).length(), 0.4);
  var centerPoint = Point.interpolate(position1, position2, 0.5);
  if (position1.equals(position2))
  {
    centerPoint.y = centerPoint.y - Math.cos(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop * 2;
    centerPoint.x = centerPoint.x - Math.sin(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop * 2;
  } 
    
  return centerPoint;
}

BaseEdgeDrawer.prototype.GetPointOnArc = function (position1, position2, procent)
{
    if (this.getPointOnArc && this.getPointOnArc != this)
    {
      return this.getPointOnArc.GetPointOnArc(position1, position2, procent);
    }
    
  return Point.interpolate(position1, position2, procent);
}

function ProgressArcDrawer(context, baseDrawer, progress)
{
    this.context    = context;
    this.baseDrawer = baseDrawer;
    this.progress   = progress;
}

ProgressArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);


ProgressArcDrawer.prototype.Draw = function(baseEdge, arcStyle)
{
    this.baseDrawer.Draw(baseEdge, arcStyle);
    
    this.context.lineWidth = 10;
    
    var positions = baseEdge.GetEdgePositionsShift();
    var progressSize = 10;
    
    if (positions[0].equals(positions[1]))
    {
        var sizeInRadian = progressSize / (2 * Math.PI * arcStyle.sizeOfLoop) * 6;
        
        this.context.beginPath();
        this.context.arc(positions[0].x - Math.cos(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop,
                         positions[0].y - Math.sin(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop, arcStyle.sizeOfLoop, this.progress * 2 * Math.PI, this.progress * 2 * Math.PI + sizeInRadian);
        this.context.closePath();
        this.context.stroke();
    }
    else
    {
        var startPosition  = this.baseDrawer.GetPointOnArc(positions[0], positions[1], this.progress);
        var vectorOffset   = positions[0].subtract(positions[1]).normalizeCopy(progressSize);
        var finishPosition = startPosition.add(vectorOffset);
        
        this.context.beginPath();
        this.context.moveTo(startPosition.x, startPosition.y);
        this.context.lineTo(finishPosition.x, finishPosition.y);
        this.context.closePath();
        this.context.stroke();
    }
}


function CurvedArcDrawer(context, model)
{
    this.context = context;
    this.model   = model;
}

CurvedArcDrawer.prototype = Object.create(BaseEdgeDrawer.prototype);

CurvedArcDrawer.prototype.DrawArc = function(position1, position2, arcStyle)
{
  if (position1.equals(position2))
  {
    this.context.beginPath();
    this.context.arc(position1.x - Math.cos(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop, 
                     position1.y - Math.sin(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop, arcStyle.sizeOfLoop, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.stroke();
  }
  else
  {
    var points = this.model.GetBezierPoints(position1, position2);
    var firstBezierPoint  = points[0];  
    var secondBezierPoint = points[1];
    
    this.context.beginPath();
    this.context.moveTo(position1.x, position1.y);
    this.context.bezierCurveTo(firstBezierPoint.x, firstBezierPoint.y, secondBezierPoint.x, secondBezierPoint.y, position2.x, position2.y);
    this.context.stroke(); 
  }
}

CurvedArcDrawer.prototype.GetStartArrowDiretion = function(position1, position2, lengthArrow) 
{
    var dist = position1.distance(position2);
    var direction = position1.subtract(this.model.GetCurvedPoint(position1, position2, lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetFinishArrowDiretion = function(position1, position2, lengthArrow) 
{
    var dist      = position1.distance(position2);
    var direction = position2.subtract(this.model.GetCurvedPoint(position1, position2, 1.0 - lengthArrow / dist));
    direction.normalize(1.0);
    return direction;
}

CurvedArcDrawer.prototype.GetTextCenterPoint = function (position1, position2, hasPair, arcStyle)
{
  var centerPoint = this.model.GetCurvedPoint(position1, position2, 0.5)
  if (position1.equals(position2))
  {
    centerPoint.y = centerPoint.y - Math.cos(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop * 2;
    centerPoint.x = centerPoint.x - Math.sin(arcStyle.loopShiftAngel) * arcStyle.sizeOfLoop * 2;
  } 
    
  return centerPoint;
}

CurvedArcDrawer.prototype.GetPointOnArc = function (position1, position2, procent)
{   
  return this.model.GetCurvedPoint(position1, position2, procent);
}
/**
 * Graph drawer.
 */
 
 
function CommonBackgroundStyle()
{
	this.commonColor   = '#ffffff';
	this.commonOpacity = 1.0;
}

function PrintBackgroundStyle()
{
	this.commonColor   = '#ffffff';
	this.commonOpacity = 1.0;
}

function BaseBackgroundDrawer(context)
{   
  this.context = context;
}

BaseBackgroundDrawer.prototype.Draw = function(style, width, height, position, scale) 
{
    var context = this.context;
    
    var rect = new Rect(position, position.add(new Point(width / scale, height / scale)));
    
    context.clearRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);
    
    if (style.commonOpacity > 0.0)
    {
        context.globalAlpha = style.commonOpacity;
        context.fillStyle   = style.commonColor;
        context.fillRect(-rect.minPoint.x, -rect.minPoint.y, rect.size().x + 1, rect.size().y + 1);
        context.globalAlpha = 1.0;
    }
}
/**
 * File for algorithms.
 *
 */

// Return list of vertex with connected vertex.
function getVertexToVertexArray(graph, ignoryDirection)
{
	res = {};

	for (var i = 0; i < graph.edges.length; i ++)
	{
		edge = graph.edges[i];		
		if (!res.hasOwnProperty(edge.vertex1.id))
		{
			res[edge.vertex1.id] = [];
		}
		res[edge.vertex1.id].push(edge.vertex2);
		if (!edge.isDirect || ignoryDirection)
		{
			if (!res.hasOwnProperty(edge.vertex2.id))
			{
				res[edge.vertex2.id] = [];
			}

			res[edge.vertex2.id].push(edge.vertex1);
		}
	}

	return res;
}

// Global array of all algorithms.
var g_Algorithms   = [];
var g_AlgorithmIds = [];

// Call this function to register your factory algoritm.
function RegisterAlgorithm (factory)
{
    g_Algorithms.push(factory);
    g_AlgorithmIds.push(factory(null).getId());
}

// Base algorithm class.
function BaseAlgorithm (graph, app)
{
    this.graph = graph;
    this.app = app;
}

// @return name of algorthm. For now we supports only 2 locals: "ru" and "en"
BaseAlgorithm.prototype.getName = function(local)
{
    return "unknown_name_" + local;
}

// @return id of algorthm. Please use format: "your id"."algorithm id". Ex. "OlegSh.ConnectedComponent"
BaseAlgorithm.prototype.getId = function()
{
    return "unknown.unknown";
}

// @return message for user.
BaseAlgorithm.prototype.getMessage = function(local)
{
    return "unknown_message_" + local;
}

// calls when user select vertex.
// @return true if you allow to select this object or false.
BaseAlgorithm.prototype.selectVertex = function(vertex)
{
    return false;
}

// calls when user select edge.
// @return true if you allow to select this object or false.
BaseAlgorithm.prototype.selectEdge = function(edge)
{
    return false;
}

// user click to workspace.
// @return true if you allow to deselect all
BaseAlgorithm.prototype.deselectAll = function()
{
    return true;
}

// get result of algorithm.
// If result if not ready, please return null.
// It will be called after each user action.
// Please return true, if you done.
BaseAlgorithm.prototype.result = function(resultCallback)
{
    return null;
}

// If you no need to get feedback from user, return true.
// In this case result will calls once.
BaseAlgorithm.prototype.instance = function()
{
    return true;
}

// @return false, if you change up text and do not want to restore it back.
BaseAlgorithm.prototype.needRestoreUpText = function()
{
    return true;
}

// @return true, if you change resotry graph after use.
BaseAlgorithm.prototype.wantRestore = function()
{
    return false;
}

// calls this method if wantRestore return true.
BaseAlgorithm.prototype.restore = function()
{
}

// @return 0, if object is not selected, in other case return groupe of selection.
BaseAlgorithm.prototype.getObjectSelectedGroup = function(object)
{
    return 0;
}

// This methos is called, when messages was updated on html page.
BaseAlgorithm.prototype.messageWasChanged = function() {}

// Algorithm priority in menu
BaseAlgorithm.prototype.getPriority = function()
{
    return 0;
}

// Algorithm support multi graph
BaseAlgorithm.prototype.IsSupportMultiGraph = function()
{
    return false;
}

/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function BaseAlgorithmEx(graph, app)
{
    BaseAlgorithm.apply(this, arguments);
}

// inheritance.
BaseAlgorithmEx.prototype = Object.create(BaseAlgorithm.prototype);

BaseAlgorithmEx.prototype.CalculateAlgorithm = function(queryString, resultCallback)
{
    var graph = this.graph;
    var creator = new GraphMLCreater(graph.vertices, graph.edges);
    var pathObjects = [];
    var properties = {};
    var result = [];
    
    var xml = creator.GetXMLString();
    console.log(xml);

    $.ajax({
         type: "POST",
         url: "/" + SiteDir + "cgi-bin/GraphCGI.exe?" + queryString,
         data: xml,
         dataType: "text",
         })
    .done(function( msg )
        {
        console.log(msg);
        $('#debug').text(msg);
        xmlDoc = $.parseXML( msg );
        var $xml = $( xmlDoc );
        
        $results = $xml.find( "result" );
        
        $results.each(function(){
                      $values = $(this).find( "value" );
                      
                      $values.each(function(){
                                   var type  = $(this).attr('type');
                                   var value = $(this).text();
                                   var res = {};
                                   res.type = type;
                                   res.value = value;
                                   result.push(res);
                                   });
                      });
        
        $nodes = $xml.find( "node" );
        
          $nodes.each(function(){
                      var id = $(this).attr('id');
                      $data = $(this).find("data");
                      $data.each(function(){
                                 if ("hightlightNode" == $(this).attr('key') && $(this).text() == "1")
                                 {
                                 pathObjects.push(graph.FindVertex(id));
                                 }
                                 else
                                 {
                                 if (!properties[id])
                                 {
                                 properties[id] = {};
                                 }
                                 properties[id][$(this).attr('key')] = $(this).text();
                                 }
                                 });
                      });
        
        $edges = $xml.find( "edge" );
        
        $edges.each(function(){
                        var source = $(this).attr('source');
                        var target = $(this).attr('target');
                        var edge = graph.FindEdge(source, target);
                        if (typeof $(this).attr('id') !== 'undefined')
                        {
                            edge = graph.FindEdgeById($(this).attr('id'));
                        }
                        pathObjects.push(edge);
            
                        $data = $(this).find("data");
                        $data.each(function(){
                            if (!properties[edge.id])
                            {
                                properties[edge.id] = {};
                            }
                            properties[edge.id][$(this).attr('key')] = $(this).text();
                        });
                    });
        
        console.log(result);
        
        resultCallback(pathObjects, properties, result);
        });

    return true;
}


BaseAlgorithmEx.prototype.GetNodesPath = function(array, start, count)
{
    var res = [];
    for (var index = start; index < start + count; index++)
    {
        res.push(array[index].value);
    }
    return res;
}


/**
 *
 *  This event handlers.
 *
 *
 */

/**
 * Base Handler.
 *
 */
 
function BaseHandler(app)
{
	this.app = app;
    this.app.setRenderPath([]);
    
    this.app.ClearUndoStack();
}

// Need redraw or nor.
BaseHandler.prototype.needRedraw = false;
BaseHandler.prototype.objects    = [];
BaseHandler.prototype.message    = "";


BaseHandler.prototype.IsNeedRedraw = function(object)
{
	return this.needRedraw;
}

BaseHandler.prototype.RestRedraw = function(object)
{
	this.needRedraw = false;
}

BaseHandler.prototype.SetObjects = function(objects)
{
	this.objects = objects;
}

BaseHandler.prototype.GetSelectedGraph = function(pos)
{
	// Selected Graph.
    var res = null;
    for (var i = 0; i < this.app.graph.vertices.length; i ++)
    {
		if (this.app.graph.vertices[i].position.distance(pos) < this.app.graph.vertices[i].model.diameter / 2.0)
		{
            // Select last of them.
            res = this.app.graph.vertices[i];
		}
	}

	
	return res;
}

BaseHandler.prototype.GetSelectedArc = function(pos)
{
	// Selected Arc.
    for (var i = 0; i < this.app.graph.edges.length; i ++)
    {
        var edge = this.app.graph.edges[i];
        
        if (edge.HitTest(new Point(pos.x, pos.y)))
            return edge;
	}

	
	return null;
}

BaseHandler.prototype.GetSelectedObject = function(pos)
{
	var graphObject = this.GetSelectedGraph(pos);
	if (graphObject)
	{
		return graphObject;
	}
	
	var arcObject = this.GetSelectedArc(pos);
	if (arcObject)
	{
		return arcObject;
	}
	
	return null;
}


BaseHandler.prototype.GetUpText = function(object)
{
	return "";
}


BaseHandler.prototype.GetMessage = function()
{
	return this.message;
}


BaseHandler.prototype.MouseMove = function(pos) {;}

BaseHandler.prototype.MouseDown = function(pos) {;}

BaseHandler.prototype.MouseUp   = function(pos) {;}

BaseHandler.prototype.GetSelectedGroup = function(object) 
{
	return 0;
}

BaseHandler.prototype.InitControls = function() 
{
    var vertex1Text = document.getElementById("Vertex1");
    if (vertex1Text)
    {
        var handler = this;
        vertex1Text.onchange = function () {
           for (var i = 0; i < handler.app.graph.vertices.length; i++)
           {   
               if (handler.app.graph.vertices[i].mainText == vertex1Text.value)
               {
	               handler.SelectFirstVertexMenu(vertex1Text, handler.app.graph.vertices[i]);
                   break;
               }
           }
        };
        
        this.UpdateFirstVertexMenu(vertex1Text);
    }
    
    var vertex2Text = document.getElementById("Vertex2");
    if (vertex2Text)
    {
        var handler = this;
        vertex2Text.onchange = function () {
           for (var i = 0; i < handler.app.graph.vertices.length; i++)
           {   
               if (handler.app.graph.vertices[i].mainText == vertex2Text.value)
               {
	               handler.SelectSecondVertexMenu(vertex2Text, handler.app.graph.vertices[i]);
                   break;
               }
           }
        };
        
        this.UpdateSecondVertexMenu(vertex2Text);
    }
}

BaseHandler.prototype.GetNodesPath = function(array, start, count)
{
    var res = [];
    for (var index = start; index < start + count; index++)
    {
        res.push(this.app.graph.FindVertex(array[index].value));
    }
    return res;
}

BaseHandler.prototype.RestoreAll = function()
{
}

BaseHandler.prototype.GetSelectVertexMenu = function(menuName)
{
	var res = "<input list=\"vertexList" + menuName + "\" id=\"" + menuName + "\" class=\"SelectVertexInput\"/>" + 
      "<datalist id=\"vertexList" + menuName + "\">";
    
	for (var i = 0; i < this.app.graph.vertices.length; i++)
	{
		res = res + "<option value=\"" + this.app.graph.vertices[i].mainText + "\"/>";
	}
    
    return res + "</datalist>";
}

BaseHandler.prototype.GetSelect2VertexMenu = function()
{
    return "<span style=\"float:right\">" + 
        this.GetSelectVertexMenu("Vertex1") + " &rarr; " + this.GetSelectVertexMenu("Vertex2") + "</span>";
}

BaseHandler.prototype.SelectFirstVertexMenu = function(vertex1Text, vertex)
{}

BaseHandler.prototype.UpdateFirstVertexMenu = function()
{}

BaseHandler.prototype.SelectSecondVertexMenu = function(vertex2Text, vertex)
{}

BaseHandler.prototype.UpdateSecondVertexMenu = function()
{}

/**
 * Default handler.
 * Select using mouse, drag.
 *
 */
function DefaultHandler(app)
{
	BaseHandler.apply(this, arguments);
	this.message = g_textsSelectAndMove;
}

// inheritance.
DefaultHandler.prototype = Object.create(BaseHandler.prototype);
// Current drag object.
DefaultHandler.prototype.dragObject     = null;
// Selected object.
DefaultHandler.prototype.selectedObject = null;
// Is pressed
DefaultHandler.prototype.pressed = false;
// Prev position.
DefaultHandler.prototype.prevPosition = false;
// Cuvled change value.
DefaultHandler.prototype.curvedValue    = 0.1;

DefaultHandler.prototype.MouseMove = function(pos) 
{
	if (this.dragObject)
	{
        this.dragObject.position.x = pos.x;
        this.dragObject.position.y = pos.y;
		this.needRedraw = true;
	}
    else if (this.pressed)
    {
        this.app.onCanvasMove((new Point(pos.x, pos.y)).subtract(this.prevPosition).multiply(this.app.canvasScale));
        this.needRedraw = true;
        //this.prevPosition = pos;
    }
}

DefaultHandler.prototype.MouseDown = function(pos)
{
	this.selectedObject = null;
	this.dragObject     = null;
	var selectedObject = this.GetSelectedObject(pos);
	if (selectedObject != null)
	{
		this.selectedObject = selectedObject;
	}	
	if ((selectedObject instanceof BaseVertex) && selectedObject != null)
	{
		this.dragObject = selectedObject;
		this.message = g_moveCursorForMoving;		
	}	
	this.needRedraw = true;
    this.pressed    = true;
    this.prevPosition = pos;
    this.app.canvas.style.cursor = "move";
}

DefaultHandler.prototype.RenameVertex = function(text)
{
    if (this.selectedObject != null && (this.selectedObject instanceof BaseVertex))
    {
        this.selectedObject.mainText = text;
        this.app.redrawGraph();
    }
}

DefaultHandler.prototype.MouseUp = function(pos) 
{
	this.message = g_textsSelectAndMove;
	this.dragObject = null;
    this.pressed    = false;
    this.app.canvas.style.cursor = "auto";
    if (this.selectedObject != null && (this.selectedObject instanceof BaseVertex))
    {
        this.message = g_textsSelectAndMove + " <button type=\"button\" id=\"renameButton\" class=\"btn btn-default btn-xs\" style=\"float:right;z-index:1;position: relative;\">" + g_renameVertex + "</button>";
        
        var handler = this;
        var callback = function (enumType) {
                handler.RenameVertex(enumType.GetVertexText(0));
                userAction("RenameVertex");
        };
        $('#message').unbind();
        $('#message').on('click', '#renameButton', function(){
                        var customEnum =  new TextEnumVertexsCustom();
                        customEnum.ShowDialog(callback, g_rename,  g_renameVertex, handler.selectedObject.mainText);
                     });
    }
    else if (this.selectedObject != null && (this.selectedObject instanceof BaseEdge))
    {
        this.message = g_textsSelectAndMove
        + "<span style=\"float:right;\"><button type=\"button\" id=\"incCurvel\" class=\"btn btn-default btn-xs\"> + </button>"
        + " " + g_curveEdge + " "
        + "<button type=\"button\" id=\"decCurvel\" class=\"btn btn-default btn-xs\"> - </button>"
        + "&nbsp &nbsp<button type=\"button\" id=\"editEdge\" class=\"btn btn-default btn-xs\" style=\"z-index:1;position: relative;\">" + g_editWeight + "</button></span>";
        var handler = this;
        $('#message').unbind();
        $('#message').on('click', '#editEdge', function(){
                         var direct = false;
                         var dialogButtons = {};

                         dialogButtons[g_save] = function() {
                        
                           handler.selectedObject.SetWeight(document.getElementById('EdgeWeight').value);
                             
                            handler.needRedraw = true;
                            handler.app.redrawGraph();

                            userAction("ChangeWeight");
                            $( this ).dialog( "close" );
                         };

                         document.getElementById('EdgeWeight').value = handler.selectedObject.useWeight ? handler.selectedObject.weight : g_noWeight;
                         document.getElementById('EdgeWeightSlider').value = handler.selectedObject.useWeight ? handler.selectedObject.weight : 0;

                         $( "#addEdge" ).dialog({
                                                resizable: false,
                                                height: "auto",
                                                width:  "auto",
                                                modal: true,
                                                title: g_editWeight,
                                                buttons: dialogButtons,
                                                dialogClass: 'EdgeDialog',
                                                open: function () {
                                                $(handler).off('submit').on('submit', function () {
                                                                         return false;
                                                                         });
                                                }
                                                });
                         });

        $('#message').on('click', '#incCurvel', function(){
            handler.selectedObject.model.ChangeCurvedValue(DefaultHandler.prototype.curvedValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
        $('#message').on('click', '#decCurvel', function(){
            handler.selectedObject.model.ChangeCurvedValue(-DefaultHandler.prototype.curvedValue);
            handler.needRedraw = true;
            handler.app.redrawGraph();
            userAction("Edge.Bend");
        });
    }
}

DefaultHandler.prototype.GetSelectedGroup = function(object)
{
	return (object == this.dragObject) || (object == this.selectedObject) ? 1 : 0;
}


/**
 * Add Graph handler.
 *
 */
function AddGraphHandler(app)
{
  BaseHandler.apply(this, arguments);
  this.message = g_clickToAddVertex;	
}

// inheritance.
AddGraphHandler.prototype = Object.create(BaseHandler.prototype);

AddGraphHandler.prototype.MouseDown = function(pos) 
{
	this.app.CreateNewGraph(pos.x, pos.y);
	this.needRedraw = true;
	this.inited = false;
}

AddGraphHandler.prototype.InitControls = function() 
{
    var enumVertexsText = document.getElementById("enumVertexsText");
    if (enumVertexsText)
    {
        var enumsList = this.app.GetEnumVertexsList();
        for (var i = 0; i < enumsList.length; i ++)
        {
            var option = document.createElement('option');
            option.text  = enumsList[i]["text"];
            option.value = enumsList[i]["value"];
            enumVertexsText.add(option, i);
            if (enumsList[i]["select"])
            {
                enumVertexsText.selectedIndex = i;
            }
        }
        
        var addGraphHandler = this;
        enumVertexsText.onchange = function () {
            addGraphHandler.ChangedType();
        };
    }
}

AddGraphHandler.prototype.ChangedType = function() 
{
	var enumVertexsText = document.getElementById("enumVertexsText");

	this.app.SetEnumVertexsType(enumVertexsText.options[enumVertexsText.selectedIndex].value);
}



/**
 * Connection Graph handler.
 *
 */
function ConnectionGraphHandler(app)
{
  BaseHandler.apply(this, arguments);
  this.SelectFirst();	
}

// inheritance.
ConnectionGraphHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
ConnectionGraphHandler.prototype.firstObject = null;

ConnectionGraphHandler.prototype.AddNewEdge = function(selectedObject, isDirect)
{
	this.app.CreateNewArc(this.firstObject, selectedObject, isDirect, document.getElementById('EdgeWeight').value, $("#RadiosReplaceEdge").prop("checked"));
	this.SelectFirst();					
	this.app.NeedRedraw();
}

ConnectionGraphHandler.prototype.SelectVertex = function(selectedObject) 
{
    if (this.firstObject)
    {
        var direct = false;
        var handler = this;
        var dialogButtons = {};
        
        if (!this.app.graph.isMulti())
        {
            var hasEdge        = this.app.graph.FindEdgeAny(this.firstObject.id, selectedObject.id);
            var hasReverseEdge = this.app.graph.FindEdgeAny(selectedObject.id, this.firstObject.id);

            if (hasEdge == null && hasReverseEdge == null)
            {
                $("#RadiosReplaceEdge").prop("checked", true);
                $("#NewEdgeAction" ).hide();
            }
            else
                $( "#NewEdgeAction" ).show();
        }
        else
        {
            $("#RadiosAddEdge").prop("checked", true);
            $("#NewEdgeAction" ).hide();
        }
        
        dialogButtons[g_orintEdge] = function() {
                    handler.AddNewEdge(selectedObject, true);						
                    $( this ).dialog( "close" );					
                };
        dialogButtons[g_notOrintEdge] = function() {
                    handler.AddNewEdge(selectedObject, false);
                    $( this ).dialog( "close" );						
                };					
        $( "#addEdge" ).dialog({
            resizable: false,
            height: "auto",
            width:  "auto",
            modal: true,
            title: g_addEdge,
            buttons: dialogButtons,
            dialogClass: 'EdgeDialog',
            open: function () {
                        $(this).off('submit').on('submit', function () {
                            return false;
                        });
                }
        });
    }
    else
    {
        this.SelectSecond(selectedObject);	
    }
    this.needRedraw = true;
}

ConnectionGraphHandler.prototype.MouseDown = function(pos) 
{
	var selectedObject = this.GetSelectedGraph(pos);
	if (selectedObject && (selectedObject instanceof BaseVertex))
	{
        this.SelectVertex(selectedObject);
	}
    else
    {  
      this.SelectFirst();
      this.needRedraw = true;
    }
}

ConnectionGraphHandler.prototype.GetSelectedGroup = function(object)
{
	return (object == this.firstObject) ? 1 : 0;
}

ConnectionGraphHandler.prototype.SelectFirst = function()
{
	this.firstObject = null;
	this.message     = g_selectFisrtVertexToConnect + this.GetSelect2VertexMenu();
}

ConnectionGraphHandler.prototype.SelectSecond = function(selectedObject)
{
	this.firstObject = selectedObject;
	this.message     = g_selectSecondVertexToConnect + this.GetSelect2VertexMenu();						
}

ConnectionGraphHandler.prototype.SelectFirstVertexMenu = function(vertex1Text, vertex)
{
   this.firstObject = null;
   this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateFirstVertexMenu = function(vertex1Text)
{
    if (this.firstObject)
    {
        vertex1Text.value = this.firstObject.mainText;        
    }
}

ConnectionGraphHandler.prototype.SelectSecondVertexMenu = function(vertex2Text, vertex)
{
    this.SelectVertex(vertex);
}

ConnectionGraphHandler.prototype.UpdateSecondVertexMenu = function(vertex2Text)
{
    if (this.secondObject)
    {
        vertex2Text.value = this.secondObject.mainText;
    }   
}

/**
 * Delete Graph handler.
 *
 */
function DeleteGraphHandler(app)
{
  BaseHandler.apply(this, arguments);
  this.message = g_selectObjectToDelete;
}

// inheritance.
DeleteGraphHandler.prototype = Object.create(BaseHandler.prototype);

DeleteGraphHandler.prototype.MouseDown = function(pos) 
{
	var selectedObject = this.GetSelectedObject(pos);
        
    if (!this.app.IsCorrectObject(selectedObject))
        return;
    
    this.app.PushToStack("Delete");
    this.app.DeleteObject(selectedObject);
	this.needRedraw = true;
    
    this.UpdateUndoButton();
}

DeleteGraphHandler.prototype.UpdateUndoButton = function()
{
    if (!this.app.IsUndoStackEmpty())
    {
        this.message = g_selectObjectToDelete + "<span style=\"float:right;\"><button type=\"button\" id=\"undoDelete\" class=\"btn btn-default btn-xs\"> " + g_Undo + " </button>";
        
        var handler = this;
        $('#message').unbind();
        $('#message').on('click', '#undoDelete', function(){
            handler.app.Undo();
            userAction("Undo.Delete");
            
            handler.UpdateUndoButton();
        });
    }
    else
    {
        this.message = g_selectObjectToDelete;        
    }

    this.app.updateMessage();
}

/**
 * Delete Graph handler.
 *
 */
function DeleteAllHandler(app)
{
  BaseHandler.apply(this, arguments);  
}

// inheritance.
DeleteAllHandler.prototype = Object.create(BaseHandler.prototype);

DeleteAllHandler.prototype.clear = function() 
{	
	// Selected Graph.
    this.app.graph = new Graph(); 
    this.app.savedGraphName = "";
    this.needRedraw = true;
}


/**
 * Save/Load graph from matrix.
 *
 */
function ShowAdjacencyMatrix(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
ShowAdjacencyMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowAdjacencyMatrix.prototype.firstObject = null;
// Path
ShowAdjacencyMatrix.prototype.pathObjects = null;

ShowAdjacencyMatrix.prototype.show = function()
{
	var handler = this;
	var dialogButtons = {};

    $('#AdjacencyMatrixField').unbind();
	$( "#AdjacencyMatrixField" ).on('keyup change', function (eventObject)
		{
			if (!handler.app.TestAdjacencyMatrix($( "#AdjacencyMatrixField" ).val(), [], []))
			{
				$( "#BadMatrixFormatMessage" ).show();
			}
			else
			{
				$( "#BadMatrixFormatMessage" ).hide();
			}
		});

	dialogButtons[g_save] = function() {
				handler.app.SetAdjacencyMatrixSmart($( "#AdjacencyMatrixField" ).val());					
				$( this ).dialog( "close" );					
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );						
			};

	$( "#AdjacencyMatrixField" ).val(this.app.GetAdjacencyMatrix());	
	$( "#BadMatrixFormatMessage" ).hide();
	
    if (this.app.graph.isMulti())
        $( "#AdjacencyMatrixMultiGraphDesc").show();
    else
        $( "#AdjacencyMatrixMultiGraphDesc").hide();
    
	$( "#adjacencyMatrix" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_adjacencyMatrixText,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
}


/**
 * Save/Load graph from Incidence matrix.
 *
 */
function ShowIncidenceMatrix(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
ShowIncidenceMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowIncidenceMatrix.prototype.firstObject = null;
// Path
ShowIncidenceMatrix.prototype.pathObjects = null;

ShowIncidenceMatrix.prototype.show = function()
{
	var handler = this;
	var dialogButtons = {};

    $('#IncidenceMatrixField').unbind();
	$( "#IncidenceMatrixField" ).on('keyup change', function (eventObject)
		{
			if (!handler.app.TestIncidenceMatrix($( "#IncidenceMatrixField" ).val(), [], []))
			{
				$( "#BadIncidenceMatrixFormatMessage" ).show();
			}
			else
			{
				$( "#BadIncidenceMatrixFormatMessage" ).hide();
			}
		});

	dialogButtons[g_save] = function() {
				handler.app.SetIncidenceMatrixSmart($( "#IncidenceMatrixField" ).val());					
				$( this ).dialog( "close" );					
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );						
			};

	$( "#IncidenceMatrixField" ).val(this.app.GetIncidenceMatrix());	
	$( "#BadIncidenceMatrixFormatMessage" ).hide();
				
	$( "#incidenceMatrix" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_incidenceMatrixText,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
}


/**
 * Show distance matrix.
 *
 */
function ShowDistanceMatrix(app)
{
  BaseHandler.apply(this, arguments);
  this.app = app;
  this.message = "";	
}

// inheritance.
ShowDistanceMatrix.prototype = Object.create(BaseHandler.prototype);
// First selected.
ShowDistanceMatrix.prototype.firstObject = null;
// Path
ShowDistanceMatrix.prototype.pathObjects = null;

ShowDistanceMatrix.prototype.GetIncidenceMatrix = function (rawMatrix)
{
	var matrix = "";
	for (var i = 0; i < rawMatrix.length; i++)
	{
		for (var j = 0; j < rawMatrix[i].length; j++)
		{	
            if ((new Graph()).infinity == rawMatrix[i][j])
            {
                matrix += '\u221E';
            }
            else if (i == j)
            {
                matrix += "0";
            }
            else
            {
                matrix += rawMatrix[i][j];   
            }
            
			if (j != rawMatrix[i].length - 1)
			{
				matrix += ", ";
			}
			
		}
		matrix = matrix + "\n";
	}
	
	return matrix;
}

ShowDistanceMatrix.prototype.show = function()
{
	var handler = this;
	var dialogButtons = {};

	dialogButtons[g_close] = function() {
				$( this ).dialog( "close" );						
			};

    var handler = g_Algorithms[g_AlgorithmIds.indexOf("OlegSh.FloidAlgorithm")](this.app.graph, this.app);
        
	$( "#FloidMatrixField" ).val(this.GetIncidenceMatrix(handler.resultMatrix()));	
				
	$( "#floidMatrix" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_minDistMatrixText,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
}

/**
 * Save dialog Graph handler.
 *
 */
function SavedDialogGraphHandler(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";
}

// inheritance.
SavedDialogGraphHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
SavedDialogGraphHandler.prototype.firstObject = null;
// Path
SavedDialogGraphHandler.prototype.pathObjects = null;
// Objects.
SavedDialogGraphHandler.prototype.objects    = null;

SavedDialogGraphHandler.prototype.show = function(object)
{
	this.app.SaveGraphOnDisk();

	var dialogButtons = {};

	dialogButtons[g_close] = function() {
				$( this ).dialog( "close" );					
			};

	document.getElementById('GraphName').value = "http://" + window.location.host + window.location.pathname + 
							"?graph=" + this.app.GetGraphName();

 	document.getElementById('GraphName').select();

        document.getElementById("ShareSavedGraph").innerHTML = 
		document.getElementById("ShareSavedGraph").innerHTML.replace(/graph=([A-Za-z]*)/g, "graph=" + this.app.GetGraphName());

	$( "#saveDialog" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_save_dialog,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});

}

/**
 * Save dialog Graph handler.
 *
 */
function SavedDialogGraphImageHandler(app)
{
    BaseHandler.apply(this, arguments);
    this.message = "";
    this.imageName = "";
}

// inheritance.
SavedDialogGraphImageHandler.prototype = Object.create(BaseHandler.prototype);
// First selected.
SavedDialogGraphImageHandler.prototype.firstObject = null;
// Path
SavedDialogGraphImageHandler.prototype.pathObjects = null;
// Objects.
SavedDialogGraphImageHandler.prototype.objects    = null;

SavedDialogGraphImageHandler.prototype.showDialogCallback = function ()
{
    var dialogButtons = {};

    dialogButtons[g_close] = function() {
        $( this ).dialog( "close" );
    };

    var fileLocation = "tmp/saved/" + this.imageName.substr(0, 2) + "/"+ this.imageName + ".png"

    document.getElementById("showSavedImageGraph").src     = "/" + fileLocation;
    document.getElementById("showSavedImageGraphRef").href = "/" + fileLocation;
    //document.getElementById("showSavedImageGraph").src = document.getElementById("showSavedImageGraph").src.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);
    document.getElementById("ShareSavedImageGraph").innerHTML =
    document.getElementById("ShareSavedImageGraph").innerHTML.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);

    document.getElementById("SaveImageLinks").innerHTML =
    document.getElementById("SaveImageLinks").innerHTML.replace(/tmp\/saved\/([A-Za-z]*)\/([A-Za-z]*).png/g, fileLocation);

    $( "#saveImageDialog" ).dialog({
                              resizable: false,
                              height: "auto",
                              width:  "auto",
                              modal: true,
                              title: g_save_image_dialog,
                              buttons: dialogButtons,
                              dialogClass: 'EdgeDialog'
                              });

}

SavedDialogGraphImageHandler.prototype.showWorkspace = function()
{
    var object = this;
    var callback = function() {
      object.showDialogCallback();
    };
    
    this.imageName = this.app.SaveGraphImageOnDisk(callback);
}

SavedDialogGraphImageHandler.prototype.showFullgraph = function()
{
    var object = this;
    var callback = function() {
      object.showDialogCallback();
    };
    
    this.imageName = this.app.SaveFullGraphImageOnDisk(callback, false);
}

SavedDialogGraphImageHandler.prototype.showPrint = function()
{
    var object = this;
    var callback = function() {
      object.showDialogCallback();
    };
    
    this.imageName = this.app.SaveFullGraphImageOnDisk(callback, true);
}

/**
 * Algorithm Graph handler.
 *
 */
function AlgorithmGraphHandler(app, algorithm)
{
    BaseHandler.apply(this, arguments);
    this.algorithm = algorithm;
    this.SaveUpText();
    
    this.UpdateResultAndMesasge();
}

// inheritance.
AlgorithmGraphHandler.prototype = Object.create(BaseHandler.prototype);

// Rest this handler.
AlgorithmGraphHandler.prototype.MouseMove = function(pos) {}

AlgorithmGraphHandler.prototype.MouseDown = function(pos)
{
    this.app.setRenderPath([]);
 
    if (this.algorithm.instance())
    {
        this.app.SetDefaultHandler();
    }
    else
    {
        var selectedObject = this.GetSelectedGraph(pos);
        if (selectedObject && (selectedObject instanceof BaseVertex))
        {
            if (this.algorithm.selectVertex(selectedObject))
            {
                this.needRedraw = true;
            }
            
            this.UpdateResultAndMesasge();
        }
        else  if (selectedObject && (selectedObject instanceof BaseEdge))
        {
            if (this.algorithm.selectEdge(selectedObject))
            {
                this.needRedraw = true;
            }
            
            this.UpdateResultAndMesasge();
        }
        else
        {
            if (this.algorithm.deselectAll())
            {
                this.needRedraw = true;
                this.UpdateResultAndMesasge();
            }
        }
    }
}

AlgorithmGraphHandler.prototype.MouseUp   = function(pos) {}

AlgorithmGraphHandler.prototype.GetSelectedGroup = function(object)
{
	return this.algorithm.getObjectSelectedGroup(object);
}

AlgorithmGraphHandler.prototype.RestoreAll = function()
{
    this.app.setRenderPath([]);
 
    if (this.algorithm.needRestoreUpText())
    {
        this.RestoreUpText();
    }
    
    if (this.algorithm.wantRestore())
    {
        this.algorithm.restore();
    }
}

AlgorithmGraphHandler.prototype.SaveUpText = function()
{
    this.vertexUpText = {};
    var graph = this.app.graph;
    for (i = 0; i < graph.vertices.length; i ++)
    {
        this.vertexUpText[graph.vertices[i].id] = graph.vertices[i].upText;
    }
}

AlgorithmGraphHandler.prototype.RestoreUpText = function()
{
    var graph = this.app.graph;

    for (i = 0; i < graph.vertices.length; i ++)
    {
        if (graph.vertices[i].id in this.vertexUpText)
        {
            graph.vertices[i].upText = this.vertexUpText[graph.vertices[i].id];
        }
    }
}

AlgorithmGraphHandler.prototype.UpdateResultAndMesasge = function()
{
    var self = this;
    result = this.algorithm.result(function (result)
                                   {
                                        self.message = self.algorithm.getMessage(g_language);
                                        self.app.resultCallback(result);
                                   });
    
    this.app.resultCallback(result);
    
    this.message = this.algorithm.getMessage(g_language);
}

AlgorithmGraphHandler.prototype.InitControls = function()
{
    this.algorithm.messageWasChanged();
}

AlgorithmGraphHandler.prototype.GetMessage = function()
{
	return this.algorithm.getMessage(g_language);
}


/**
 * Groupe rename vertices.
 *
 */
function GroupRenameVertices(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
GroupRenameVertices.prototype = Object.create(BaseHandler.prototype);
// First selected.
GroupRenameVertices.prototype.firstObject = null;
// Path
GroupRenameVertices.prototype.pathObjects = null;

GroupRenameVertices.prototype.show = function()
{
	var handler = this;
	var dialogButtons = {};
    var graph = this.app.graph;
    var app = this.app;
    
	dialogButtons[g_save] = function() {
                var titlesList = $( "#VertextTitleList" ).val().split('\n');
                for (i = 0; i < Math.min(graph.vertices.length, titlesList.length); i ++)
                {
                    graph.vertices[i].mainText = titlesList[i];
                }
                app.redrawGraph();
				$( this ).dialog( "close" );					
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );						
			};

    var titleList = "";
    for (i = 0; i < graph.vertices.length; i ++)
    {
        titleList = titleList + graph.vertices[i].mainText + "\n";
    }
    
	$( "#VertextTitleList" ).val(titleList);
		
	$( "#GroupRenameDialog" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_groupRename,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
}


/**
 * Setup Vertex Style rename vertices.
 *
 */
function SetupVertexStyle(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
SetupVertexStyle.prototype = Object.create(BaseHandler.prototype);

SetupVertexStyle.prototype.show = function(index)
{
	var handler = this;
	var dialogButtons = {};
    var graph = this.app.graph;
    var app   = this.app;
    var style = Object.assign({}, (index == 0 ? app.vertexCommonStyle : app.vertexSelectedVertexStyles[index - 1]));
    
    var fillFields = function()
    {
        $( "#vertexFillColor" ).val(style.fillStyle);
        $( "#vertexStrokeColor" ).val(style.strokeStyle);
        $( "#vertexTextColor" ).val(style.mainTextColor);
        $( "#vertexStrokeSize" ).val(style.lineWidth);
    }
    
    var redrawVertex = function()
    {
        style.fillStyle     = $( "#vertexFillColor" ).val();
        style.strokeStyle   = $( "#vertexStrokeColor" ).val();
        style.mainTextColor = $( "#vertexTextColor" ).val();
        style.lineWidth     = $( "#vertexStrokeSize" ).val();
        
        var canvas  = document.getElementById( "VertexPreview" );
        var context = canvas.getContext('2d');    
        
        context.save();

        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(app.backgroundCommonStyle, canvas.width, canvas.height, new Point(0, 0), 1.0);
        
        var graphDrawer = new BaseVertexDrawer(context);
        var baseVertex  = new BaseVertex(canvas.width / 2, canvas.height / 2, new BaseEnumVertices(this));
        baseVertex.mainText = "1";
        baseVertex.upText   = "Up Text";
        
        graphDrawer.Draw(baseVertex, style);
        
        context.restore();
    }
    
    //var dialogButtons = [];
    
	dialogButtons[g_default] = 
           {
               text    : g_default,
               class   : "MarginLeft",
               click   : function() {
                    app.ResetVertexStyle(index);
                    app.redrawGraph();
                    $( this ).dialog( "close" );
               }
           };
    
	dialogButtons[g_save] = function() {
                app.SetVertexStyle(index, style);    
                app.redrawGraph();
				$( this ).dialog( "close" );					
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );						
			};
    
    fillFields();
        
	$( "#SetupVertexStyleDialog" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_vertexDraw,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
    
    redrawVertex();

    $( "#vertexFillColor" ).unbind();
    $( "#vertexStrokeColor" ).unbind();
    $( "#vertexTextColor" ).unbind();
    $( "#vertexStrokeSize" ).unbind();
    
    $( "#vertexFillColor" ).change(redrawVertex);
    $( "#vertexStrokeColor" ).change(redrawVertex);
    $( "#vertexTextColor" ).change(redrawVertex);
    $( "#vertexStrokeSize" ).change(redrawVertex);
}

/**
 * Setup Vertex Style rename vertices.
 *
 */
function SetupEdgeStyle(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
SetupEdgeStyle.prototype = Object.create(BaseHandler.prototype);

SetupEdgeStyle.prototype.show = function(index)
{
	var handler = this;
	var dialogButtons = {};
    var graph = this.app.graph;
    var app   = this.app;
    var style = Object.assign({}, (index == 0 ? app.edgeCommonStyle : app.edgeSelectedStyles[index - 1]));
    
    var fillFields = function()
    {
        $( "#edgeFillColor" ).val(style.fillStyle);
        $( "#edgeStrokeColor" ).val(style.strokeStyle);
        $( "#edgeTextColor" ).val(style.weightText);
    }
    
    var redrawVertex = function()
    {
        style.fillStyle     = $( "#edgeFillColor" ).val();
        style.strokeStyle   = $( "#edgeStrokeColor" ).val();
        style.weightText    = $( "#edgeTextColor" ).val();
        
        var canvas  = document.getElementById( "EdgePreview" );
        var context = canvas.getContext('2d');    
        
        context.save();
        
        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(app.backgroundCommonStyle, canvas.width, canvas.height, new Point(0, 0), 1.0);
        
        var graphDrawer  = new BaseEdgeDrawer(context);
        var baseVertex1  = new BaseVertex(0, canvas.height / 2, new BaseEnumVertices(this));
        var baseVertex2  = new BaseVertex(canvas.width, canvas.height / 2, new BaseEnumVertices(this));
        var baseEdge     = new BaseEdge(baseVertex1, baseVertex2, true, 10);
        
        graphDrawer.Draw(baseEdge, style);
        
        context.restore();
    }
    
	dialogButtons[g_default] = 
           {
               text    : g_default,
               class   : "MarginLeft",
               click   : function() {
                    app.ResetEdgeStyle(index);
                    app.redrawGraph();
                    $( this ).dialog( "close" );
               }
           };
    
	dialogButtons[g_save] = function() {
                app.SetEdgeStyle(index, style);    
                app.redrawGraph();
				$( this ).dialog( "close" );					
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );						
			};
    
    fillFields();
        
	$( "#SetupEdgeStyleDialog" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_edgeDraw,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
    
    redrawVertex();

    $( "#edgeFillColor" ).unbind();
    $( "#edgeStrokeColor" ).unbind();
    $( "#edgeTextColor" ).unbind();
    
    $( "#edgeFillColor" ).change(redrawVertex);
    $( "#edgeStrokeColor" ).change(redrawVertex);
    $( "#edgeTextColor" ).change(redrawVertex);
}

/**
 * Setup Background Style rename vertices.
 *
 */
function SetupBackgroundStyle(app)
{
  BaseHandler.apply(this, arguments);
  this.message = "";	
}

// inheritance.
SetupBackgroundStyle.prototype = Object.create(BaseHandler.prototype);

SetupBackgroundStyle.prototype.show = function()
{
	var handler = this;
	var dialogButtons = {};
    var graph = this.app.graph;
    var app   = this.app;
    var style = Object.assign({}, app.backgroundCommonStyle);
    
    var fillFields = function()
    {
        $( "#backgroundColor" ).val(style.commonColor);
        $( "#backgroundTransporent" ).val(style.commonOpacity);
    }
    
    var redrawVertex = function()
    {
        style.commonColor     = $( "#backgroundColor" ).val();
        style.commonOpacity   = $( "#backgroundTransporent" ).val();
        
        var canvas  = document.getElementById( "BackgroundPreview" );
        var context = canvas.getContext('2d');    
        
        context.save();

        var backgroundDrawer = new BaseBackgroundDrawer(context);
        backgroundDrawer.Draw(style, canvas.width, canvas.height, new Point(0, 0), 1.0);
        
        context.restore();
    }
    
	dialogButtons[g_default] = 
           {
               text    : g_default,
               class   : "MarginLeft",
               click   : function() {
                    app.ResetBackgroundStyle();
                    app.redrawGraph();
                    $( this ).dialog( "close" );
               }
           };
    
	dialogButtons[g_save] = function() {
                app.SetBackgroundStyle(style);    
                app.redrawGraph();
				$( this ).dialog( "close" );
			};
	dialogButtons[g_cancel] = function() {
				$( this ).dialog( "close" );
			};
    
    fillFields();
        
	$( "#SetupBackgroundStyleDialog" ).dialog({
		resizable: false,
        height: "auto",
        width:  "auto",
		modal: true,
		title: g_backgroundStyle,
		buttons: dialogButtons,
		dialogClass: 'EdgeDialog'
	});
    
    redrawVertex();

    $( "#backgroundColor" ).unbind();
    $( "#backgroundTransporent" ).unbind();
    
    $( "#backgroundColor" ).change(redrawVertex);
    $( "#backgroundTransporent" ).change(redrawVertex);
}
/**
 *  This class creates GraphML xml.
 *
 */


function GraphMLCreater(nodes, arcs)
{
	this.nodes = nodes;
	this.arcs = arcs;
}


GraphMLCreater.prototype.GetXMLString = function()
{
	var mainHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><graphml>";
	var directedHeader   = "<graph id=\"Graph\" edgedefault=\"directed\">";	
	var undirectedHeader = "<graph id=\"Graph\" edgedefault=\"undirected\">";
	
	var defaultWeight = 1.0;
	var weightKeyId  = "\"d0\"";
	var weightNode = "<key id="+ weightKeyId + " for=\"node\" attr.name=\"weight\" attr.type=\"double\">" +
			"<default>" + defaultWeight + "</default>" +
			"</key>";
	
	var xmlBoby = "";
	  
	for (var i = 0; i < this.nodes.length; i++)
	{
		xmlBoby = xmlBoby + "<node id=\"" + this.nodes[i].id + "\"/>";
	}
	var hasDirected = false;
	for (var i = 0; i < this.arcs.length; i++)
	{
		if (this.arcs[i].isDirect)
		{
			hasDirected = true;
			break;
		}
	}		
	for (var i = 0; i < this.arcs.length; i++)
	{
	    var weightData = "";
	    var arc = this.arcs[i];

		if (this.arcs[i].weight != defaultWeight)
		{
		    weightData = "<data key=" + weightKeyId + ">" + arc.weight + "</data>";
		}

		xmlBoby = xmlBoby + "<edge source=\"" + arc.vertex1.id + "\" target=\""
			+ arc.vertex2.id + "\" " +
			(arc.isDirect != hasDirected ? (hasDirected ? "directed=\"false\"" : "directed=\"true\"") : "") +
		    " id=\"" + arc.id + "\"";
			
		xmlBoby = xmlBoby +	((weightData != "") ? ">" + weightData + "</edge>" : "/>")
	}	
	xml = mainHeader + weightNode + (hasDirected ? directedHeader : undirectedHeader) + xmlBoby + "</graph></graphml>"
	return xml;
}
/**
 * Graph class.
 *
 */

 
function Graph()
{
	// List of vertex.
	this.vertices = [];
	// List of arcs.
	this.edges   = [];
	// Unique Id of new graph.
	this.uidGraph = 0;
	// Unique Id of new edge.
	this.uidEdge = 10000;
	// Has direction edge.
	this.hasDirect = false;
    // Is graph multi
    this.isMultiGraph = false;
};

// infinity
Graph.prototype.infinity = 1E8;

Graph.prototype.AddNewVertex = function(vertex)
{
	if (this.vertices.length < 300)
	{
		vertex.SetId (this.uidGraph);
		this.uidGraph = this.uidGraph + 1;
		this.vertices.push(vertex);
	}
	return this.vertices.length - 1;
}

Graph.prototype.AddNewEdgeSafe = function(graph1, graph2, isDirect, weight, replaceIfExists = true)
{
	return this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight), replaceIfExists);
}

Graph.prototype.AddNewEdge = function(edge, replaceIfExists)
{
    edge.id = this.uidEdge;
    this.uidEdge = this.uidEdge + 1;
    
	var edge1      = this.FindEdgeAny(edge.vertex1.id, edge.vertex2.id);
	var edgeRevert = this.FindEdgeAny(edge.vertex2.id, edge.vertex1.id);
	if (!edge.isDirect)
	{
		if (edge1 != null && replaceIfExists)
			this.DeleteEdge(edge1);
		if (edgeRevert != null && replaceIfExists)
			this.DeleteEdge(edgeRevert);
        
		this.edges.push(edge);
	}
	else
	{
		if (edge1 != null && replaceIfExists)
			this.DeleteEdge(edge1);
		if (edgeRevert != null && !edgeRevert.isDirect && replaceIfExists)
			this.DeleteEdge(edgeRevert);
		
		this.edges.push(edge);
	}
    
    this.isMultiGraph = this.checkMutiGraph();
	
	return this.edges.length - 1;
}


Graph.prototype.DeleteEdge = function(edgeObject)
{
	var index = this.edges.indexOf(edgeObject);
	if (index > -1) 
	{
		this.edges.splice(index, 1);
	}
    
    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.DeleteVertex = function(vertexObject)
{
	var index = this.vertices.indexOf(vertexObject);
	if (index > -1) 
	{
 		for (var i = 0; i < this.edges.length; i++)
		{
			if (this.edges[i].vertex1 == vertexObject || this.edges[i].vertex2 == vertexObject)
			{
				this.DeleteEdge(this.edges[i]);
				i--;
			}
		}
		this.vertices.splice(index, 1);
	}
}

Graph.prototype.FindVertex = function(id)
{
	var res = null;
	for (var i = 0; i < this.vertices.length; i++)
	{
		if (this.vertices[i].id == id)
		{
			res = this.vertices[i];
			break;
		}
	}
	
	return res;
}

// depricated
Graph.prototype.FindEdge = function(id1, id2)
{
	return this.FindEdgeAny(id1, id2);
}

Graph.prototype.FindEdgeById = function(edgeId)
{
    var res = null;
    for (var i = 0; i < this.edges.length; i++)
    {
        if (this.edges[i].id == edgeId)
        {
            res = this.edges[i];
            break;
        }
    }
	
    return res;
}

Graph.prototype.FindEdgeAny = function(id1, id2)
{
	var res = null;
	for (var i = 0; i < this.edges.length; i++)
	{
		if ((this.edges[i].vertex1.id == id1 && this.edges[i].vertex2.id == id2)
		     || (!this.edges[i].isDirect && this.edges[i].vertex1.id == id2 && this.edges[i].vertex2.id == id1))
		{
			res = this.edges[i];
			break;
		}
	}
	
	return res;
}

Graph.prototype.FindEdgeMin = function(id1, id2)
{
	var res       = null;
    var minWeight = this.infinity;
	for (var i = 0; i < this.edges.length; i++)
	{
        var edge = this.edges[i];
		if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
		     || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1))
		{
            if (edge.weight < minWeight)
            {
                res       = edge;
                minWeight = edge.weight;
            }
		}
	}
	
	return res;
}

Graph.prototype.FindAllEdges = function(id1, id2)
{
	var res       = [];
	for (var i = 0; i < this.edges.length; i++)
	{
        var edge = this.edges[i];
		if ((edge.vertex1.id == id1 && edge.vertex2.id == id2)
		     || (!edge.isDirect && edge.vertex1.id == id2 && edge.vertex2.id == id1))
		{
			res.push(edge);
		}
	}
	
	return res;
}

Graph.prototype.GetAdjacencyMatrixStr = function ()
{
	var matrix = "";
	for (var i = 0; i < this.vertices.length; i++)
	{
		for (var j = 0; j < this.vertices.length; j++)
		{	
			var edge = this.FindEdgeMin (this.vertices[i].id, this.vertices[j].id);
			if (edge != null)
			{
				matrix += edge.weight;
			}
			else
			{
				matrix += "0";
			}
			
			if (j != this.vertices.length)
			{
				matrix += ", ";
			}
			
		}
		matrix = matrix + "\n";
	}
	
	return matrix;
}

Graph.prototype.GetAdjacencyMatrix = function ()
{
    var matrix = [];
    
    for (var i = 0; i < this.vertices.length; i ++)
    {
        matrix.push([]);
        var v1 = this.vertices[i];
        for (var j = 0; j < this.vertices.length; j ++)
        {
            var v2 = this.vertices[j];
            var edge = this.FindEdgeMin(v1.id, v2.id);
            if (edge != null)
            {
                matrix[i][j] = edge.GetWeight();
            }
            else
            {
                matrix[i][j] = this.infinity;               
            }
        }
    }
    
    return matrix;
}

Graph.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator)
{
    if(separator === undefined) 
    {
      separator = ",";
    }
    
	var bGoodFormat = true;
	rowsObj.rows = [];
	rowsObj.rows = matrix.split ("\n");
	for (j = 0; j < rowsObj.rows.length; ++j)
	{
		//rowsObj.rows[j] = rowsObj.rows[j].replace(/ /g,'');
		if (rowsObj.rows[j] === "")
		{
			rowsObj.rows.splice(j--, 1);
		}
	}
	
	colsObj.cols = [];
	for (var i = 0; i < rowsObj.rows.length; i++)
	{
		colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
		for (j = 0; j < colsObj.cols[i].length; ++j)
		{
			if (colsObj.cols[i][j] === "")
			{
				colsObj.cols[i].splice(j--, 1);
			}
		}
		if (colsObj.cols[i].length != rowsObj.rows.length)
		{
			bGoodFormat = false;
			break;
		}
	}

	return bGoodFormat;
}


Graph.prototype.IsVertexesHasSamePosition = function (position, vertexCount)
{
	var res = false;

	for (var j = 0; j < Math.min(this.vertices.length, vertexCount); j++)
	{
		if (position.distance(this.vertices[j].position) < this.vertices[j].model.diameter * 2)
		{
			res = true;
			break;
		}
	}

	return res;
}

Graph.prototype.GetRandomPositionOfVertex = function (matrix, vertexIndex, viewportSize)
{
	var point = new Point(0, 0);

	var relatedVertex = [];

	for (var j = 0; j < matrix.length; j++)
	{
		if (j < this.vertices.length && (cols[vertexIndex][j] > 0 || cols[j][vertexIndex] > 0) && j != vertexIndex)
		{
			relatedVertex.push(this.vertices[j]);
		}
	}


	var diameter = (new VertexModel()).diameter;

	if (relatedVertex.length > 1)
	{
		for (var j = 0; j < relatedVertex.length; j++)
		{
			point = point.add(relatedVertex[j].position);
		}

		point = point.multiply(1 / relatedVertex.length);

		point.offset (Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter, Math.random() * diameter + (Math.random() ? -1 : 1) * 2 * diameter);
	}
	else
	{
		point = new Point(Math.random() * viewportSize.x, Math.random() * viewportSize.y);
	}

	if (this.IsVertexesHasSamePosition (point, matrix.length))
	{ 
		point.offset (Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter, 
			Math.random() * diameter + + (Math.random() ? -1 : 1) * 4 * diameter);
	}

	// Clamp
	point.x = Math.min(Math.max(point.x, diameter), viewportSize.x);
	point.y = Math.min(Math.max(point.y, diameter), viewportSize.y);

	return point;
}

Graph.prototype.VertexesReposition = function (viewportSize, newVertexes)
{
   var maxGravityDistanceSqr = Math.max(viewportSize.x, viewportSize.y) / 5.0;
   maxGravityDistanceSqr  = maxGravityDistanceSqr * maxGravityDistanceSqr;
   //Math.min(viewportSize.x, viewportSize.y) / 2.0;
   var velocityDamping    = 0.85;
   var diameter = (new VertexModel()).diameter;
   var maxDistance = diameter * 3;
   var gravityDistanceSqr =  10  * (maxDistance * maxDistance);
   var edgeGravityKof     =  10  / (maxDistance);
   var kCenterForce       =  10  / (maxDistance * 10);
   var centerPoint = viewportSize.multiply(0.5);
   var velocityMax = maxDistance * 10;
    
   var edgesMatrix = {};   
   for (var i = 0; i < this.edges.length; i++)
   {  
        edgesMatrix[this.edges[i].vertex1.id + this.edges[i].vertex2.id * 1000] = 1;
        edgesMatrix[this.edges[i].vertex2.id + this.edges[i].vertex1.id * 1000] = 1;
   }
   
   var startAngel = Math.random() * 180.0;
   for(i = 0; i < newVertexes.length; i++) // loop through vertices
   {
      newVertexes[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2, 
					(viewportSize.y - diameter * 2) / 2, 360 * i / newVertexes.length + startAngel);
   }
    
   var k = 0;
   var bChanged = true;
   while (k < 1000 && bChanged)
   {
      var vertexData = [];
      for(i = 0; i < newVertexes.length; i++) // loop through vertices
      {
         // Has no in newVertexes.
         var currentVertex = {};
         currentVertex.object    = newVertexes[i];
         currentVertex.net_force = new Point (0, 0);
         currentVertex.velocity   = new Point (0, 0);
         vertexData.push(currentVertex);

         for(j = 0; j < this.vertices.length; j++) // loop through other vertices
         {
            otherVertex = this.vertices[j];
      
            if (otherVertex == currentVertex.object) continue;
             
            // squared distance between "u" and "v" in 2D space
            var rsq = currentVertex.object.position.distanceSqr(otherVertex.position);
            
            
            {
              // counting the repulsion between two vertices
              var force = (currentVertex.object.position.subtract(otherVertex.position)).normalize(gravityDistanceSqr / rsq);
              currentVertex.net_force = currentVertex.net_force.add(force);
            }
         }

         for(j = 0; j < this.vertices.length; j++) // loop through edges
         {
            otherVertex = this.vertices[j];
            if (edgesMatrix.hasOwnProperty(currentVertex.object.id + 1000 * otherVertex.id))
            {
                var distance = currentVertex.object.position.distance(otherVertex.position);
                
                if (distance > maxDistance)
                {
                    // countin the attraction
                    var force = (otherVertex.position.subtract(currentVertex.object.position)).normalize(edgeGravityKof * (distance - maxDistance));
                    currentVertex.net_force = currentVertex.net_force.add(force);
                }
            }
         }
          
         // Calculate force to center of world.
         var distanceToCenter = centerPoint.distance(currentVertex.object.position);
         var force = centerPoint.subtract(currentVertex.object.position).normalize(distanceToCenter * kCenterForce);
         currentVertex.net_force = currentVertex.net_force.add(force);
          
         // counting the velocity (with damping 0.85)
         currentVertex.velocity = currentVertex.velocity.add(currentVertex.net_force);
     }

     bChanged = false;

     for(i = 0; i < vertexData.length; i++) // set new positions
     {
        var v = vertexData[i];
        var velocity = v.velocity;
        if (velocity.length() > velocityMax)
        {
            velocity = velocity.normalize(velocityMax);
        }
        v.object.position = v.object.position.add(velocity);
        if (velocity.length() >= 1)
        {
		  bChanged = true;
        }
     }
     k++;
   }
    
    
   // Looks like somthing going wrong and will use circle algorithm for reposition.
   var bbox = this.getGraphBBox();
   if (bbox.size().length() > viewportSize.length() * 1000)
   {
       for(i = 0; i < newVertexes.length; i++) // loop through vertices
       {
           newVertexes[i].position.orbit(new Point(viewportSize.x / 2, viewportSize.y / 2), (viewportSize.x - diameter * 2) / 2,
                                         (viewportSize.y - diameter * 2) / 2, 360 * i / newVertexes.length + startAngel);
       }
   }
   else
   {
       // Try to rotate graph to fill small area.
       var count = 10;
       var agnle  = 360.0 / count;
       var viewportAspect = viewportSize.x / viewportSize.y;
       var bestIndex = 0;
       var graphSize  = bbox.size();
       var bestAspect = graphSize.x / graphSize.y;
       var center     = bbox.center();
       
       for (var i = 1; i < count; i++)
       {
           for(j = 0; j < newVertexes.length; j++) // loop through vertices
           {
               newVertexes[j].position.rotate(center, agnle);
           }
           
           var newBBox   = this.getGraphBBox();
           var newAspect = newBBox.size().x / newBBox.size().y;
           if (Math.abs(newAspect - viewportAspect) < Math.abs(bestAspect - viewportAspect))
           {
               bestAspect = newAspect;
               bestIndex = i;
           }
       }
       
       // Rotate to best aspect.
       for(j = 0; j < newVertexes.length; j++) // loop through vertices
       {
           newVertexes[j].position.rotate(center, - agnle * (count - bestIndex - 1));
       }
   }
}

Graph.prototype.SetAdjacencyMatrix = function (matrix, viewportSize, currentEnumVertesType, separator)
{
    if (separator === undefined) 
    {
      separator = ",";
    }
    
	var rowsObj = {};
	var colsObj = {};

	//ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));

	if (this.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator))
	{
		rows = rowsObj.rows;
		cols = colsObj.cols;
        
        var clonedEdge = this.edges.slice(0);
		for (var i = 0; i < clonedEdge.length; i++)
		{
			this.DeleteEdge (clonedEdge[i]);
		}
		
		var newVertexes = [];
        var bWeightGraph = false;
        
		for (var i = 0; i < rows.length; i++)
		{
			for (var j = 0; j < rows.length; j++)
			{
				if (j >= this.vertices.length)
				{
					var newPos = this.GetRandomPositionOfVertex (matrix, j, viewportSize);
                    newVertexes.push(new BaseVertex(newPos.x, newPos.y, currentEnumVertesType));
					this.AddNewVertex(newVertexes[newVertexes.length - 1]);
				}
				
				if (cols[i][j] > 0)
				{
					var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[i], this.vertices[j], cols[i][j] != cols[j][i], cols[i][j], true);
                    if (nEdgeIndex >= 0)
                    {
                        bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                    }
				}
			}
		}
        
        // Set use weight false, because we have unwieghts graph.
        if (!bWeightGraph)
        {
            this.edges.forEach(function(part, index, theArray) {
                               theArray[index].useWeight = false;
                               });
        }

		for (var i = rows.length; i < Math.max(this.vertices.length, rows.length); i++)
		{
			this.DeleteVertex(this.vertices[i]);
			i--;
		}                        

        this.VertexesReposition(viewportSize, newVertexes);
	}	
}


Graph.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj, separator)
{
    if (separator === undefined) 
    {
      separator = ",";
    }
    
	var bGoodFormat = true;
	rowsObj.rows = [];
	rowsObj.rows = matrix.split ("\n");
	for (j = 0; j < rowsObj.rows.length; ++j)
	{
		if (rowsObj.rows[j] === "")
		{
			rowsObj.rows.splice(j--, 1);
		}
	}
	colsObj.cols = [];
	var columnCount = 0;
	for (var i = 0; i < rowsObj.rows.length; i++)
	{
		colsObj.cols[i] = this.SplitMatrixString(rowsObj.rows[i], separator);//rowsObj.rows[i].split (",");
		for (j = 0; j < colsObj.cols[i].length; ++j)
		{
			if (colsObj.cols[i][j] === "")
			{
				colsObj.cols[i].splice(j--, 1);
			}
		}
		if (i == 0)
		{
			columnCount = colsObj.cols[i].length;
		}
		if (colsObj.cols[i].length != columnCount)
		{
			bGoodFormat = false;
			break;
		}
	}


	if (bGoodFormat)
	{
		for (var i = 0; i < colsObj.cols[0].length; i++)
		{
			var values = [];
			for (j = 0; j < colsObj.cols.length; ++j)
			{
				if (colsObj.cols[j][i] != 0)
				{
					values.push(colsObj.cols[j][i]);
				}
			}

			if (!(values.length <= 1 ||  (values.length == 2 && (values[0] == values[1] || values[0] == -values[1]))))
			{
				bGoodFormat = false;
				break;
			}
		}
	}

	return bGoodFormat;
}

Graph.prototype.SetIncidenceMatrix = function (matrix, viewportSize, currentEnumVertesType)
{
	var rowsObj = {};
	var colsObj = {};

	//ViewportSize = viewportSize.subtract(new Point((new VertexModel()).diameter * 2, (new VertexModel()).diameter * 2));

	if (this.TestIncidenceMatrix(matrix, rowsObj, colsObj))
	{
		rows = rowsObj.rows;
		cols = colsObj.cols;
        var clonedEdge = this.edges.slice(0);
		for (var i = 0; i < clonedEdge.length; i++)
		{
			this.DeleteEdge (clonedEdge[i]);
		}
		var newVertexes = [];
        var bWeightGraph = false;
		for (var i = 0; i < cols[0].length; i++)
		{
			var edgeValue = [];
			var edgeIndex = [];
			for (var j = 0; j < cols.length; j++)
			{
				if (j >= this.vertices.length)
				{

					var newPos = new Point(0, 0);//this.GetRandomPositionOfVertex (matrix, j, viewportSize);
                                        newVertexes.push(new BaseVertex(newPos.x, newPos.y, currentEnumVertesType));
					this.AddNewVertex(newVertexes[newVertexes.length - 1]);
				}				

				if (cols[j][i] != 0)
				{
				  edgeValue.push(cols[j][i]);
				  edgeIndex.push(j);
				}
			}

			if (edgeIndex.length == 1)
			{
				edgeValue.push(edgeValue[0]);
				edgeIndex.push(edgeIndex[0]);
			}

			if (edgeIndex.length == 2)
			{       
				if (edgeValue[0] != edgeValue[1])
				{
					if (edgeValue[1] > 0)
					{
						edgeValue = edgeValue.swap(0, 1);
						edgeIndex = edgeIndex.swap(0, 1);
                			} 
				}
                
                var nEdgeIndex = this.AddNewEdgeSafe(this.vertices[edgeIndex[0]], this.vertices[edgeIndex[1]],
                                                     edgeValue[0] != edgeValue[1], Math.abs(edgeValue[1]), false);
                if (nEdgeIndex >= 0)
                {
                    bWeightGraph = bWeightGraph || this.edges[nEdgeIndex].weight != 1;
                }
			}
		}
        
        // Set use weight false, because we have unwieghts graph.
        if (!bWeightGraph)
        {
            this.edges.forEach(function(part, index, theArray) {
                               theArray[index].useWeight = false;
                               });
        }

		for (var i = cols.length; i < Math.max(this.vertices.length, cols.length); i++)
		{
			this.DeleteVertex(this.vertices[i]);
			i--;             
		}                        

          	this.VertexesReposition(viewportSize, newVertexes);
	}	
}

Graph.prototype.GetIncidenceMatrix = function ()
{
	var matrix = "";
	for (var i = 0; i < this.vertices.length; i++)
	{
		for (var j = 0; j < this.edges.length; j++)
		{	
			if (this.edges[j].vertex1 == this.vertices[i])
			{
				matrix += this.edges[j].weight;
			}
			else if (this.edges[j].vertex2 == this.vertices[i] && !this.edges[j].isDirect)
			{
				matrix += this.edges[j].weight;
			}
			else if (this.edges[j].vertex2 == this.vertices[i] && this.edges[j].isDirect)
			{
				matrix += -this.edges[j].weight;
			}
			else
			{
				matrix += "0";
			}
			
			if (j != this.edges.length - 1)
			{
				matrix += ", ";
			}
			
		}
		matrix = matrix + "\n";
	}
	
	return matrix;
}

Graph.prototype.SplitMatrixString = function (line, separator)
{
  if (separator === undefined) 
  {
    separator = ",";
  }
    
  var res = [];
  var i = 0;

  // For case: 00110101101
  var isZeroOneLine = true;

  for (i = 0; i < line.length; i++)
  {
    if (line.charAt(i) != '0' && line.charAt(i) != '1')
    {
      isZeroOneLine = false;
      break;
    }
  } 

  if (!isZeroOneLine)
  {
    if (separator != ",")
    {
        line = line.replace(/,/g, ".");
    }
    for (i = 0; i < line.length; i++)
    {
      // add , if we use space as separator
      if (("0123456789.-e").indexOf(line.charAt(i)) < 0 )
      {
        if (i > 0)
        { 
          res.push(line.substr(0, i));
        }
        if (i == 0) 
        {
          i = 1;
        }
        line = line.substr(i, line.length - i);
        i = -1;
      }
    }
    if (line.length > 0)
    {
      res.push(line);
    }
  }
  else
  {
    for (i = 0; i < line.length; i++)
    {
      res.push(line.charAt(i));
    }
  }

  console.log(res);
  return res;
}


Graph.prototype.SaveToXML = function (additionalData)
{
	var mainHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><graphml>";
	var header   = "<graph id=\"Graph\" uidGraph=\"" + this.uidGraph + "\"" + " uidEdge=\"" + this.uidEdge + "\">";

	var xmlBoby = "<nodes>";
	  
	for (var i = 0; i < this.vertices.length; i++)
	{
		xmlBoby = xmlBoby + this.vertices[i].SaveToXML();
	}

	xmlBoby = xmlBoby + "</nodes><edges>";

	for (var i = 0; i < this.edges.length; i++)
	{
		xmlBoby = xmlBoby + this.edges[i].SaveToXML();
	}		

	xmlBoby = xmlBoby + "</edges>";
    
    additionalField = "";
    if (additionalData.length > 0)
    {
        additionalField = "<additional data=\"" + additionalData + "\"/>"
    }

	return mainHeader + header + xmlBoby + "</graph>" + additionalField + "</graphml>";
}

Graph.prototype.LoadFromXML = function (xmlText, additionalData)
{
	xmlDoc = $.parseXML( xmlText );
	var $xml = $( xmlDoc );

	$graphs = $xml.find( "graph" );	

	var loadedGraphId = 0;
	var loadedEdgeId = 0;
    
	$graphs.each(function(){
		loadedGraphId = parseInt($(this).attr('uidGraph'));
		loadedEdgeId  = parseInt($(this).attr('uidEdge'));
	});
    
    // Back comportebility.
    if (isNaN(loadedEdgeId))
    {
        loadedEdgeId = 10000;
    }

	this.uidGraph = loadedGraphId;
	this.uidEdge  = loadedEdgeId;

	$nodes = $xml.find( "node" );	

	var vertexs = [];
	
	$nodes.each(function(){
		var vertex = new BaseVertex();
		vertex.LoadFromXML($(this));
		vertexs.push(vertex);
	});
	this.vertices = vertexs;

	$edges = $xml.find( "edge" );

	var edges = [];	
	var graph = this;
	$edges.each(function(){
		var edge = new BaseEdge();
		edge.LoadFromXML($(this), graph);
		edges.push(edge);
	});

	this.edges = edges;
    
    $additional = $xml.find( "additional" );
    if ($additional.length != 0 && additionalData != null)
    {
        additionalData["data"] = $additional.attr('data');
    }
    
    this.isMultiGraph = this.checkMutiGraph();
}

Graph.prototype.hasDirectEdge = function ()
{
	var res = false;
	for (var i = 0; i < this.edges.length; i++)
	{
		if(this.edges[i].isDirect)
		{
			res = true;
			break;
		}
	}
	
	return res;
}

Graph.prototype.clampPositions = function (viewportSize)
{
	var diameter = (new VertexModel()).diameter;

     	for(i = 0; i < this.vertices.length; i++) // set new positions
     	{
       		this.vertices[i].position.x = Math.min(Math.max(this.vertices[i].position.x, diameter), viewportSize.x - diameter);
        	this.vertices[i].position.y = Math.min(Math.max(this.vertices[i].position.y, diameter), viewportSize.y - diameter);
        }
}

// Use to setup scaling.
Graph.prototype.getGraphBBox = function (viewportSize)
{
    var pointMin = new Point(1e5, 1e5);
    var pointMax = new Point(-1e5, -1e5);
    var diameter = (new VertexModel()).diameter;
    
    for(i = 0; i < this.vertices.length; i++)
    {
        var vertex = this.vertices[i];
        var deltaVector = new Point(vertex.diameterFactor() * diameter, diameter);
        pointMin = pointMin.min(vertex.position.subtract(deltaVector));
        pointMax = pointMax.max(vertex.position.add(deltaVector));
    }
    
    var max_cruvled_length = 32;
    
    for(i = 0; i < this.edges.length; i++)
    {
        var edge = this.edges[i];
        
        if (edge.model.type == EdgeModels.cruvled)
        {
            var max_cruvled = edge.vertex2.position.subtract(edge.vertex1.position).length() / max_cruvled_length;
            
            for (j = 0; j < max_cruvled; j++)
            {
              var point = edge.model.GetCurvedPoint(edge.vertex1.position, edge.vertex2.position, j / max_cruvled);
              var deltaVector = new Point(max_cruvled_length, max_cruvled_length);
              pointMin = pointMin.min(point.subtract(deltaVector));
              pointMax = pointMax.max(point.add(deltaVector));
            }
        }
    }
    
    return new Rect(pointMin, pointMax);
}

Graph.prototype.hasPair = function (edge)
{
	return this.FindPairFor(edge) != null;
}

Graph.prototype.FindPairFor = function (edge)
{
    var res = this.getNeighbourEdges(edge);
	
	return res.length == 1 ? res[0] : null;
}

Graph.prototype.getNeighbourEdges = function (edge)
{
	var res = [];
    
	for (var i = 0; i < this.edges.length; i++)
	{
        var curEdge = this.edges[i];
        if (curEdge == edge)
            continue;
            
		if ((curEdge.vertex1.id == edge.vertex1.id  && 
             curEdge.vertex2.id == edge.vertex2.id) ||
            (curEdge.vertex1.id == edge.vertex2.id  && 
             curEdge.vertex2.id == edge.vertex1.id))
		{
			res.push(curEdge);
		}
	}
	
	return res;
}

Graph.prototype.checkMutiGraph = function ()
{
	var res = false;
    
    var start  = {};
    
	for (var i = 0; i < this.edges.length; i++)
	{
        var edge = this.edges[i];
        if (start.hasOwnProperty(edge.vertex1.id) && 
            start[edge.vertex1.id] == edge.vertex2.id)
        {
            res = true;
            break;
        }
        
        start[edge.vertex1.id] = edge.vertex2.id;
        if (!edge.isDirect)
        {
            if (start.hasOwnProperty(edge.vertex2.id) && 
                start[edge.vertex2.id] == edge.vertex1.id)
            {
                res = true;
                break;
            }
            
            start[edge.vertex2.id] = edge.vertex1.id;
        }
	}
	
	return res;
}

Graph.prototype.isMulti = function ()
{
	return this.isMultiGraph;
}
/*
  Classes for create text for vertexs.
*/


/**
 * Base Enum Vertexs.
 *
 */ 
function BaseEnumVertices(app)
{
    this.app = app;
}

BaseEnumVertices.prototype.GetVertexText = function(id)
{
	return id;
}

BaseEnumVertices.prototype.GetVertexTextAsync = function(callback)
{
    callback (this);
}

BaseEnumVertices.prototype.GetText = function()
{
	return "1, 2, 3...";
}

BaseEnumVertices.prototype.GetValue = function()
{
	return "Numbers";
}

function TextEnumTitle(app, title)
{
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
    this.title = title;
}


// inheritance.
TextEnumTitle.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumTitle.prototype.GetVertexText = function(id)
{
    return this.title;
}



/**
 * Text Enum
 *
 */
function TextEnumVertexs(app)
{
	BaseEnumVertices.apply(this, arguments);
	this.pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}


// inheritance.
TextEnumVertexs.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVertexs.prototype.GetVertexText = function(id)
{
	var res = "";

    res = this.pattern[id % this.pattern.length] + res;

	while (id >= this.pattern.length)
	{
	   id  = Math.floor(id / this.pattern.length) - 1;
	   res = this.pattern[id % this.pattern.length] + res;
	}

	return res;
}


TextEnumVertexs.prototype.GetText = function()
{
	return "A, B, ... Z";
}

TextEnumVertexs.prototype.GetValue = function()
{
	return "Latin";
}

/**
 * Text Enum
 *
 */
function TextEnumVertexsCyr(app)
{
	TextEnumVertexs.apply(this, arguments);
	this.pattern = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
}


// inheritance.
TextEnumVertexsCyr.prototype = Object.create(TextEnumVertexs.prototype);

TextEnumVertexsCyr.prototype.GetText = function()
{
	return "А, Б, ... Я";
}

TextEnumVertexsCyr.prototype.GetValue = function()
{
	return "Cyrillic";
}


/**
 * Text Enum
 *
 */
function TextEnumVertexsGreek(app)
{
	TextEnumVertexs.apply(this, arguments);
	this.pattern = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
}


// inheritance.
TextEnumVertexsGreek.prototype = Object.create(TextEnumVertexs.prototype);

TextEnumVertexsGreek.prototype.GetText = function()
{
	return "Α, Β, ... Ω";
}

TextEnumVertexsGreek.prototype.GetValue = function()
{
	return "Greek";
}

/**
 * Text Enum
 *
 */
function TextEnumVertexsCustom(app)
{
    BaseEnumVertices.apply(this, arguments);
    this.pattern = "";
}



// inheritance.
TextEnumVertexsCustom.prototype = Object.create(BaseEnumVertices.prototype);

TextEnumVertexsCustom.prototype.GetText = function()
{
    return g_customEnumVertex;
}

TextEnumVertexsCustom.prototype.GetValue = function()
{
    return "Custom";
}

TextEnumVertexsCustom.prototype.GetVertexTextAsync = function(callback)
{
    this.ShowDialog(callback, g_addVertex, g_addVertex, "A");
}


TextEnumVertexsCustom.prototype.ShowDialog = function(callback, buttonText, titleTitle, title)
{
    var dialogButtons = {};
    app = this.app;
    dialogButtons[buttonText] = function() {
        callback(new TextEnumTitle(app, $("#VertexTitle").val()));
        $( this ).dialog( "close" );
    };
    
    $( "#addVertex" ).dialog({
                             resizable: false,
                             height: "auto",
                             width:  "auto",
                             modal: true,
                             title: titleTitle,
                             buttons: dialogButtons,
                             dialogClass: 'EdgeDialog',
                             open: function () {
                                        $(this).off('submit').on('submit', function () {
                                                      return false;
                                                      });
                                        $("#VertexTitle").val(title);
                                        $("#VertexTitle").focus();
                                }
                             });
}
/**
 * This is main application class.
 *
 */
 
var globalApplication = null;
 
function Application(document, window)
{
    this.document = document;
    this.canvas  = this.document.getElementById('canvas');
    this.handler = new AddGraphHandler(this);
    this.savedGraphName = "";
    this.currentEnumVertesType = new BaseEnumVertices(this);//this.enumVertexesTextList[0];
    this.findPathReport = 1;
    this.isTimerRender = false;
    globalApplication  = this;
    this.renderPath = [];
    this.renderTimer = 0;
    this.renderPathLength  = 0;
    this.renderPathCounter = 0;
    this.renderPathLoops = 0;
    this.enumVertexesTextList = [new BaseEnumVertices(this), new TextEnumVertexs(this), new TextEnumVertexsCyr(this), new TextEnumVertexsGreek(this), new TextEnumVertexsCustom(this)];
    this.SetDefaultTransformations();
    this.algorithmsValues = {};
    this.userAction = function(){};
    this.undoStack  = [];
    
    this.edgeCommonStyle         = new CommonEdgeStyle();
    this.isEdgeCommonStyleCustom = false;
    this.edgeSelectedStyles      = DefaultSelectedEdgeStyles.slice();
    this.isEdgeSelectedStylesCustom = false;
    
    this.edgePrintCommonStyle      = new CommonPrintEdgeStyle();
    this.edgePrintSelectedStyles   = DefaultPrintSelectedEdgeStyles.slice();
    
    this.vertexCommonStyle          = new CommonVertexStyle();
    this.isVertexCommonStyleCustom  = false;
    this.vertexSelectedVertexStyles = DefaultSelectedGraphStyles.slice();
    this.isVertexSelectedVertexStylesCustom  = false;
    
    this.vertexPrintCommonStyle          = new CommonPrintVertexStyle(); 
    this.vertexPrintSelectedVertexStyles = DefaultPrintSelectedGraphStyles.slice();
    
    this.backgroundCommonStyle = new CommonBackgroundStyle();
    this.backgroundPrintStyle  = new PrintBackgroundStyle(); 
    this.isBackgroundCommonStyleCustom  = false;
};

// List of graph.
//Application.prototype.graph.vertices     = [];
// Current draged object.
Application.prototype.graph = new Graph();
Application.prototype.dragObject = -1;
// List of graph.edges.
//Application.prototype.graph.edges       = [];
// User handler.
Application.prototype.handler = null;
// Hold status.
Application.prototype.status = {};
// Graph name length
Application.prototype.graphNameLength = 16;
// Max undo stack size
Application.prototype.maxUndoStackSize = 8;

Application.prototype.getMousePos = function(canvas, e)
{
    /// getBoundingClientRect is supported in most browsers and gives you
    /// the absolute geometry of an element
    var rect = canvas.getBoundingClientRect();

    /// as mouse event coords are relative to document you need to
    /// subtract the element's left and top position:
    return {x: (e.clientX - rect.left) / this.canvasScale - this.canvasPosition.x, y: (e.clientY - rect.top) / this.canvasScale - this.canvasPosition.y};
}

Application.prototype.redrawGraph = function()
{
    if (!this.isTimerRender)
    {
        this._redrawGraph();
        
        this.GraphTypeChanged();
    }
}

Application.prototype.redrawGraphTimer = function()
{
    if (this.isTimerRender)
    {
        var context = this._redrawGraph();
        
        // Render path
        if (this.renderPath.length > 1)
        {
            context.save();
            context.scale(this.canvasScale, this.canvasScale);
            context.translate(this.canvasPosition.x, this.canvasPosition.y);
            
            var movePixelStep = 16;
            var currentLength = 0;
            
            var i = 0
            for (i = 0; i < this.renderPath.length - 1; i++)
            {
                var edge = null;
                if (this.renderMinPath)
                {
                    edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
                }
                else
                {
                    edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
                }
                    
                currentLength += edge.GetPixelLength();
                if (currentLength > this.renderPathCounter)
                {
                    currentLength -= edge.GetPixelLength();
                    break;
                }
            }
            
            if (i >= this.renderPath.length - 1)
            {
                i = 0;
                this.renderPathCounter = 0;
                currentLength = 0;
                this.renderPathLoops += 1;
            }
            
            var edge = null;
            if (this.renderMinPath)
            {
                edge = this.graph.FindEdgeMin(this.renderPath[i], this.renderPath[i + 1]);
            }
            else
            {
                edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            }
            
            var progress = (this.renderPathCounter - currentLength) / edge.GetPixelLength();
            
            this.RedrawEdgeProgress(context, edge, edge.vertex1.id == this.renderPath[i] ? progress : 1.0 - progress);

            this.renderPathCounter += movePixelStep;
            
            context.restore();
        }
    }
    
    if (this.renderPathLoops >= 5)
    {
        this.stopRenderTimer();
    }
}

Application.prototype._redrawGraph = function()
{
    var context = this.canvas.getContext('2d');
    
    context.save();
    
    context.scale(this.canvasScale, this.canvasScale);
    context.translate(this.canvasPosition.x, this.canvasPosition.y);
    
    var backgroundDrawer = new BaseBackgroundDrawer(context);
    
    backgroundDrawer.Draw(this.backgroundCommonStyle, Math.max(this.canvas.width, this.GetRealWidth()), Math.max(this.canvas.height, this.GetRealHeight()), this.canvasPosition, this.canvasScale);
    
    this.RedrawEdges(context);
    this.RedrawNodes(context);
    
    context.restore();
    
    return context;
}

Application.prototype._OffscreenRedrawGraph = function()
{
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width  = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');
    
    context.save();

    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);
    
    var backgroundDrawer = new BaseBackgroundDrawer(context);
    
    backgroundDrawer.Draw(this.backgroundCommonStyle, Math.max(this.canvas.width, this.GetRealWidth()), Math.max(this.canvas.height, this.GetRealHeight()), bbox.minPoint.inverse(), this.canvasScale);
    
    this.RedrawEdges(context);
    this.RedrawNodes(context);
    
    context.restore();
    
    return canvas;
}

Application.prototype._PrintRedrawGraph = function()
{
    var bbox = this.graph.getGraphBBox();
    var canvas = document.createElement('canvas');
    canvas.width  = bbox.size().x;
    canvas.height = bbox.size().y;
    var context = canvas.getContext('2d');
    
    context.save();
    
    context.translate(bbox.minPoint.inverse().x, bbox.minPoint.inverse().y);
    
    var backgroundDrawer = new BaseBackgroundDrawer(context);
    
    backgroundDrawer.Draw(this.backgroundPrintStyle, Math.max(this.canvas.width, this.GetRealWidth()), Math.max(this.canvas.height, this.GetRealHeight()), bbox.minPoint.inverse(), this.canvasScale);
    
    this.RedrawEdges(context, this.edgePrintCommonStyle,   this.edgePrintSelectedStyles);
    this.RedrawNodes(context, this.vertexPrintCommonStyle, this.vertexPrintSelectedVertexStyles);
    
    context.restore();
    
    return canvas;
}

Application.prototype.updateRenderPathLength = function()
{
    this.renderPathLength = 0;
    this.renderPathCounter = 0;
    if (this.renderPath.length > 1)
    {
        for (var i = 0; i < this.renderPath.length - 1; i++)
        {
            var edge = this.graph.FindEdge(this.renderPath[i], this.renderPath[i + 1]);
            this.renderPathLength += edge.GetPixelLength();
        }
    }
}

Application.prototype.startRenderTimer = function()
{
    this.updateRenderPathLength();
    this.renderTimer = window.setInterval(function(){globalApplication.redrawGraphTimer();}, 50);
    this.isTimerRender = true;
    this.renderPathLoops = 0;
}

Application.prototype.stopRenderTimer = function()
{
    if (this.isTimerRender)
    {
        window.clearInterval(this.renderTimer);
        this.isTimerRender = false;
        this.renderPathLoops = 0;
    }
}

Application.prototype.setRenderPath = function(renderPath, renderMinPath)
{
    this.renderPath    = renderPath;
    this.renderMinPath = renderMinPath;
    
    if (this.renderPath.length > 0)
    {
        this.startRenderTimer();
    }
    else
    {
        this.stopRenderTimer();
    }
}

Application.prototype.GetBaseArcDrawer = function(context, edge)
{
    var arcDrawer = new BaseEdgeDrawer(context);
    
    if (edge.model.type == EdgeModels.cruvled)
    {
        var curvedArcDrawer = new CurvedArcDrawer(context, edge.model);

        arcDrawer = new BaseEdgeDrawer(context, 
                                        {
                                            drawArc             : curvedArcDrawer, 
                                            startArrowDiretion  : curvedArcDrawer,
                                            finishArrowDiretion : curvedArcDrawer,
                                            textCenterObject    : curvedArcDrawer,
                                            getPointOnArc       : curvedArcDrawer
                                        }
                                      );
    }
    
    return arcDrawer;
}

Application.prototype.RedrawEdge = function(context, edge, ForceCommonStyle, ForceSelectedStyle)
{
    var curvedArcDrawer = new CurvedArcDrawer(context, edge.model)
    var arcDrawer       = this.GetBaseArcDrawer(context, edge);
    
    var commonStyle   = (ForceCommonStyle === undefined) ? this.edgeCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.edgeSelectedStyles : ForceSelectedStyle;
    
    this._RedrawEdge(edge, arcDrawer, commonStyle, selectedStyle);
}

Application.prototype._RedrawEdge = function(edge, arcDrawer, commonStyle, selectedStyles)
{
    var selectedGroup = this.handler.GetSelectedGroup(edge);
    var currentStyle  = selectedGroup > 0 ?
        selectedStyles[(selectedGroup - 1) % selectedStyles.length] : commonStyle;
    
    this._RedrawEdgeWithStyle(edge, currentStyle, arcDrawer, commonStyle, selectedStyles);
}

Application.prototype._RedrawEdgeWithStyle = function(edge, style, arcDrawer, commonStyle, selectedStyles)
{
    arcDrawer.Draw(edge, style);
}

Application.prototype.RedrawEdgeProgress = function(context, edge, progress)
{
    var progressDraw     = new ProgressArcDrawer(context, this.GetBaseArcDrawer(context, edge), progress);
    var arcDrawer        = new BaseEdgeDrawer(context, {drawObject : progressDraw});

    this._RedrawEdge(edge, arcDrawer, this.edgeCommonStyle, this.edgeSelectedStyles);
}

Application.prototype.RedrawEdges = function(context, ForceCommonStyle, ForceSelectedStyle)
{
    for (i = 0; i < this.graph.edges.length; i ++)
    {
        this.RedrawEdge(context, this.graph.edges[i], ForceCommonStyle, ForceSelectedStyle);
    }
}

Application.prototype.RedrawNodes = function(context, ForceCommonStyle, ForceSelectedStyle)
{
    var graphDrawer   = new BaseVertexDrawer(context);
    var commonStyle   = (ForceCommonStyle === undefined) ? this.vertexCommonStyle : ForceCommonStyle;
    var selectedStyle = (ForceSelectedStyle === undefined) ? this.vertexSelectedVertexStyles : ForceSelectedStyle;

    for (i = 0; i < this.graph.vertices.length; i ++)
    {
		var selectedGroup = this.handler.GetSelectedGroup(this.graph.vertices[i]);
		var currentStyle  = selectedGroup > 0 ?
				selectedStyle[(selectedGroup - 1) % selectedStyle.length] : commonStyle;

		graphDrawer.Draw(this.graph.vertices[i], currentStyle);
    }	
}

Application.prototype.updateMessage = function()
{
	this.document.getElementById('message').innerHTML = this.handler.GetMessage(); 
	this.handler.InitControls();
}

Application.prototype.CanvasOnMouseMove  = function(e)
{
	// X,Y position.
	var pos = this.getMousePos(this.canvas, e);

	this.handler.MouseMove(pos);
	if (this.handler.IsNeedRedraw())
	{
		this.handler.RestRedraw();
		this.redrawGraph();
	}

    this.updateMessage();
}

Application.prototype.CanvasOnMouseDown = function(e)
{
    var pos = this.getMousePos(this.canvas, e); /// provide this canvas and event

	this.handler.MouseDown(pos);
	if (this.handler.IsNeedRedraw())
	{
		this.handler.RestRedraw();
		this.redrawGraph();
	}

    this.updateMessage();
}

Application.prototype.CanvasOnMouseUp = function(e)
{
//	this.dragObject = -1;
	var pos = this.getMousePos(this.canvas, e);

	this.handler.MouseUp(pos);
	if (this.handler.IsNeedRedraw())
	{
		this.handler.RestRedraw();
		this.redrawGraph();
	}

    this.updateMessage();
}

Application.prototype.multCanvasScale = function(factor)
{
    var oldRealWidth = this.GetRealWidth();
    var oldRealHeight = this.GetRealHeight();
    
    this.canvasScale *= factor;
    
    this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth()  - oldRealWidth) / 2.0,
                                                            (this.GetRealHeight() - oldRealHeight) / 2.0));
    
    this.redrawGraph();
}

Application.prototype.setCanvasScale = function(factor)
{
    var oldRealWidth = this.GetRealWidth();
    var oldRealHeight = this.GetRealHeight();
    
    this.canvasScale = factor;
    
    this.canvasPosition = this.canvasPosition.add(new Point((this.GetRealWidth()  - oldRealWidth) / 2.0,
                                                            (this.GetRealHeight() - oldRealHeight) / 2.0));
    
    this.redrawGraph();
}

Application.prototype.onCanvasMove = function(point)
{
    this.canvasPosition = this.canvasPosition.add(point.multiply(1 / this.canvasScale));
    this.redrawGraph();
}

Application.prototype.AddNewVertex = function(vertex)
{
	return this.graph.AddNewVertex(vertex);
}

Application.prototype.AddNewEdge = function(edge, replaceIfExists)
{
	return this.graph.AddNewEdge(edge, replaceIfExists);
}

Application.prototype.CreateNewGraph = function(x, y)
{
    var app = this;
    
    this.currentEnumVertesType.GetVertexTextAsync(
                        function (enumType)
                        {
                            app.graph.AddNewVertex(new BaseVertex(x, y, enumType));
                            app.redrawGraph();
                                                  });
}

Application.prototype.CreateNewGraphEx = function(x, y, vertexEnume)
{
    return this.graph.AddNewVertex(new BaseVertex(x, y, vertexEnume));
}

Application.prototype.CreateNewArc = function(graph1, graph2, isDirect, weight, replaceIfExist)
{
	var edge = this.AddNewEdge(new BaseEdge(graph1, graph2, isDirect, weight), replaceIfExist);

    var edgeObject = this.graph.edges[edge];
    var hasPair    = this.graph.hasPair(edgeObject);
    var neighbourEdges = this.graph.getNeighbourEdges(edgeObject);
    
    if (hasPair)
    {
        if (edgeObject.model.default)
            edgeObject.model.type = EdgeModels.cruvled; 
        
        var pairEdge = this.graph.FindPairFor(edgeObject);
        if (pairEdge.model.default)
        {
            pairEdge.model.type = EdgeModels.cruvled;
            if (pairEdge.vertex1 == edgeObject.vertex1 && pairEdge.vertex2 == edgeObject.vertex2)
                pairEdge.model.curvedValue = -pairEdge.model.curvedValue;
        }
    }
    else if (neighbourEdges.length >= 2)
    {
        var cruvled = this.GetAvalibleCruvledValue(neighbourEdges, edgeObject);
        if (edgeObject.model.default)
        {
            edgeObject.model.type        = EdgeModels.cruvled;
            edgeObject.model.curvedValue = cruvled;
        }
    }
    
    return edge;
}

Application.prototype.DeleteEdge = function(edgeObject)
{
    var vertex1 = edgeObject.vertex1;
    var vertex2 = edgeObject.vertex2;
    
    var hasPair = this.graph.hasPair(edgeObject);
    
	this.graph.DeleteEdge(edgeObject);
    
    // Make line for pair.
    if (hasPair)
    {
        var pairEdges = this.FindAllEdges(vertex2.id, vertex1.id);
        
        if (pairEdges.length == 1 && pairEdges[0].model.default)
            pairEdges[0].model.type = EdgeModels.line;
    }
}

Application.prototype.DeleteVertex = function(graphObject)
{
	this.graph.DeleteVertex(graphObject);
}

Application.prototype.DeleteObject = function(object)
{
	if (object instanceof BaseVertex)
	{
		this.DeleteVertex(object);
	}
	else if (object instanceof BaseEdge)
	{
		this.DeleteEdge(object);
	}
}

Application.prototype.IsCorrectObject = function(object)
{
	return (object instanceof BaseVertex) || 
           (object instanceof BaseEdge);
}

Application.prototype.FindVertex = function(id)
{
	return this.graph.FindVertex(id);
}

Application.prototype.FindEdge = function(id1, id2)
{
	return this.graph.FindEdge(id1, id2);
}

Application.prototype.FindEdgeAny = function(id1, id2)
{
	return this.graph.FindEdgeAny(id1, id2);
}

Application.prototype.FindAllEdges = function(id1, id2)
{
	return this.graph.FindAllEdges(id1, id2);
}

Application.prototype.SetHandlerMode = function(mode)
{
    var manipolationHandlers = ["default", "addGraph", "addArc", "delete", "findPath", "connectedComponent", "eulerianLoop"];
    
    if (this.handler && (g_AlgorithmIds.indexOf(mode) >= 0 || manipolationHandlers.indexOf(mode) >= 0))
    {
        this.handler.RestoreAll();
    }
    
	if (mode == "default")
	{
		this.handler = new DefaultHandler(this);
	}
	else if (mode == "addGraph")
	{
		this.handler = new AddGraphHandler(this);
	}
	else if (mode == "addArc")
	{
		this.handler = new ConnectionGraphHandler(this);
	}
	else if (mode == "delete")
	{
		this.handler = new DeleteGraphHandler(this);
	}
	else if (mode == "deleteAll")
	{
		var removeAll = new DeleteAllHandler(this);
		removeAll.clear();
	}	
	else if (mode == "findPath")
	{
		this.handler = new FindPathGraphHandler(this);
	}
	else if (mode == "showAdjacencyMatrix")
	{
		var showAdjacencyMatrix = new ShowAdjacencyMatrix(this);
		showAdjacencyMatrix.show();
	}
	else if (mode == "showIncidenceMatrix")
	{
		var showIncidenceMatrix = new ShowIncidenceMatrix(this);
		showIncidenceMatrix.show();
	}
    else if (mode == "showDistanceMatrix")
	{
		var showDistanceMatrix = new ShowDistanceMatrix(this);
		showDistanceMatrix.show();
	}
	else if (mode == "connectedComponent")
	{
		this.handler = new ConnectedComponentGraphHandler(this);
	}  
	else if (mode == "saveDialog")
	{
		var savedDialogGraphHandler = new SavedDialogGraphHandler(this);
		savedDialogGraphHandler.show();
	}
    else if (mode == "saveDialogImage")
    {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showWorkspace();
    }
    else if (mode == "saveDialogFullImage")
    {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showFullgraph();           
    }
    else if (mode == "savePrintGraphImage")
    {
        var savedDialogGraphImageHandler = new SavedDialogGraphImageHandler(this);
        savedDialogGraphImageHandler.showPrint();           
    }
    else if (mode == "eulerianLoop")
    {
		this.handler = new EulerianLoopGraphHandler(this);
    }
    else if (mode == "GroupRename")
    {
		var groupRenameVertices = new GroupRenameVertices(this);
		groupRenameVertices.show();
    }
    else if (mode == "setupVertexStyle")
    {
		var setupVertexStyle = new SetupVertexStyle(this);
		setupVertexStyle.show(0);
    }
    else if (mode == "setupVertexStyleSelected")
    {
		var setupVertexStyle = new SetupVertexStyle(this);
		setupVertexStyle.show(1); 
    }
    else if (mode == "setupEdgeStyle")
    {
		var setupEdgeStyle = new SetupEdgeStyle(this);
		setupEdgeStyle.show(0);
    }
    else if (mode == "setupEdgeStyleSelected")
    {
		var setupEdgeStyle = new SetupEdgeStyle(this);
		setupEdgeStyle.show(1); 
    }
    else if (mode == "setupBackgroundStyle")
    {
		var setupBackgroundStyle = new SetupBackgroundStyle(this);
		setupBackgroundStyle.show();
    }
    else if (g_AlgorithmIds.indexOf(mode) >= 0)
    {
        this.handler = new AlgorithmGraphHandler(this, g_Algorithms[g_AlgorithmIds.indexOf(mode)](this.graph, this));
    }
    
    console.log(mode);

    this.setRenderPath([]);
	this.updateMessage();
	this.redrawGraph();
}


Application.prototype.getParameterByName = function (name)
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

Application.prototype.onPostLoadEvent = function()
{
    this.SetEnumVertexsType(document.cookie.replace(/(?:(?:^|.*;\s*)enumType\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

    var wasLoad = false;
    var matrix  = document.getElementById("inputMatrix").innerHTML;
    var separator = document.getElementById("separator").innerHTML == "space" ? " " : ",";
    
    console.log(matrix);
    console.log("separator: \"" + separator + "\"");
    
    matrix  = (matrix.length <= 0) ? this.getParameterByName("matrix") : matrix;
    if (matrix.length > 0)
    {   
	    if (!this.SetAdjacencyMatrixSmart(matrix, separator))
	    {
           this.userAction("AdjacencyMatrix.Failed");
		   this.ShowAdjacencyMatrixErrorDialog(matrix);
	    }
        else
        {
           this.userAction("AdjacencyMatrix.Success");
        }

    	this.updateMessage();
    	this.redrawGraph();
        wasLoad = true;
    }

    var matrix  = document.getElementById("inputIncidenceMatrix").innerHTML;
    matrix  = (matrix.length <= 0) ? this.getParameterByName("incidenceMatrix") : matrix;
    
    if (matrix.length > 0)
    {    
	    if (!this.SetIncidenceMatrixSmart(matrix))
	    {
            this.userAction("IncidenceMatrix.Failed");
		    this.ShowIncidenceMatrixErrorDialog(matrix);
	    }
        else
        {
            this.userAction("IncidenceMatrix.Success");
        }

    	this.updateMessage();
    	this.redrawGraph();
	    wasLoad = true;
    }

    if (!wasLoad)
    {
    	var graphName  = this.getParameterByName("graph");
	    if (graphName.length <= 0)
	    {
           graphName = document.cookie.replace(/(?:(?:^|.*;\s*)graphName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	    }
                          
       	if (graphName.length > 0)
	    {
            this.userAction("LoadGraphFromDisk");
    		this.LoadGraphFromDisk(graphName);
	    }
    }

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.onLoad = function()
{
    this.canvas = this.document.getElementById('canvas');

    this.handler = new AddGraphHandler(this);

    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.NeedRedraw = function()
{
	//TODO
	this.updateMessage();
	this.redrawGraph();
}

Application.prototype.SetStatus = function(name, value)
{
	this.status[name] = value;
}

Application.prototype.GetStatus = function()
{
	return this.status[name];
}


Application.prototype.GetAdjacencyMatrix = function ()
{
	return this.graph.GetAdjacencyMatrixStr();
}

Application.prototype.TestAdjacencyMatrix = function (matrix, rowsObj, colsObj, separator)
{
    if(separator === undefined) 
    {
      separator = ",";
    }
    
	return this.graph.TestAdjacencyMatrix(matrix, rowsObj, colsObj, separator);
}

Application.prototype.SetAdjacencyMatrix = function (matrix, separator)
{
    if(separator === undefined) 
    {
      separator = ",";
    }
    
	var res = true;
    var r = {};
	var c = {};
	if (!this.TestAdjacencyMatrix(matrix, r, c, separator))
	{
		$.get( "/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=adjacency&matrix=" + encodeURIComponent(matrix), function( data ) {;});
		res = false;
	}

	this.graph.SetAdjacencyMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVertesType, separator);
    this.AutoAdjustViewport();
	this.redrawGraph();
	return res;
}


Application.prototype.GetIncidenceMatrix = function ()
{
	return this.graph.GetIncidenceMatrix();
}

Application.prototype.TestIncidenceMatrix = function (matrix, rowsObj, colsObj)
{
	return this.graph.TestIncidenceMatrix(matrix, rowsObj, colsObj);
}

Application.prototype.SetIncidenceMatrix = function (matrix)
{
	var res = true;
        var r = {};
	var c = {};
	if (!this.TestIncidenceMatrix(matrix, r, c))
	{
		$.get( "/" + SiteDir + "cgi-bin/addFailedMatrix.php?text=incidence&matrix=" + encodeURIComponent(matrix), function( data ) {;});
		res = false;
	}

	this.graph.SetIncidenceMatrix(matrix, new Point(this.GetRealWidth(), this.GetRealHeight()), this.currentEnumVertesType);
    this.AutoAdjustViewport();
	this.redrawGraph();
	return res;
}

Application.prototype.Test = function ()
{
	this.graph.VertexesReposition(new Point(this.GetRealWidth(), this.GetRealHeight()), this.graph.vertices);
	this.redrawGraph();
}



Application.prototype.SetAdjacencyMatrixSmart = function (matrix, separator)
{
    if (separator === undefined) 
    {
      separator = ",";
    }
    
	var res = false;
	if (this.TestAdjacencyMatrix(matrix, {}, {}, separator))
        {
    		res = this.SetAdjacencyMatrix(matrix, separator);
	}
        else if (this.TestIncidenceMatrix(matrix, {}, {}))
	{
    		res = this.SetIncidenceMatrix(matrix);
        }
	else
	{
    		res = this.SetAdjacencyMatrix(matrix);
	}
	return res;
}

Application.prototype.SetIncidenceMatrixSmart = function (matrix)
{
	var res = false;

        if (this.TestIncidenceMatrix(matrix, {}, {}))
	{
    		res = this.SetIncidenceMatrix(matrix);
        }
	else if (this.TestAdjacencyMatrix(matrix, {}, {})) 	
        {
    		res = this.SetAdjacencyMatrix(matrix);
	}
	else
	{
    		res = this.SetIncidenceMatrix(matrix);
	}

	return res;
}


Application.prototype.SaveGraphOnDisk = function ()
{
	var graphAsString = this.graph.SaveToXML(this.SaveUserSettings());
    
    var styleSave = this.SaveUserSettings();
	
	if (this.savedGraphName.length <= 0)
	{
		this.savedGraphName = this.GetNewGraphName();
	}

	var app = this;
	$.ajax({
	type: "POST",
	url: "/" + SiteDir + "cgi-bin/saveGraph.php?name=" + this.savedGraphName,
	data: graphAsString,
	dataType: "text"
	})
	.done(function( msg ) 
	{
	        document.cookie = "graphName=" + app.savedGraphName;
	});
}
                          
Application.prototype.SaveGraphImageOnDisk = function (showDialogCallback)
{
    var imageName = this.GetNewName();
                          
    this.stopRenderTimer();
    this.redrawGraph();
                          
    var bbox = this.graph.getGraphBBox();
    
    var rectParams = "";
    if (this.IsGraphFitOnViewport())
    {
        var canvasWidth  = this.GetRealWidth();
        var canvasHeight = this.GetRealHeight();
        var canvasPositionInverse = this.canvasPosition.inverse();

        var pos = bbox.minPoint.subtract(canvasPositionInverse);
        
        rectParams = "&x=" + Math.round(pos.x * this.canvasScale) + "&y=" + Math.round(pos.y * this.canvasScale)
            + "&width=" + Math.round(bbox.size().x * this.canvasScale) + "&height=" + Math.round(bbox.size().y * this.canvasScale);
        
        //console.log(rectParams);
    }

    var imageBase64Data = this.canvas.toDataURL();

    $.ajax({
     type: "POST",
     url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
     data: {
           base64data : imageBase64Data
     },
     dataType: "text",
     success: function(data){
        showDialogCallback();
    }
     });
                          
    return imageName;
}

Application.prototype.SaveFullGraphImageOnDisk = function (showDialogCallback, forPrint)
{
    var imageName = this.GetNewName();
                          
    this.stopRenderTimer();
    var canvas = forPrint ? this._PrintRedrawGraph() : this._OffscreenRedrawGraph();
                          
    var bbox = this.graph.getGraphBBox();
    
    var rectParams = ""; 
    rectParams = "&x=0" + "&y=0" + "&width=" + bbox.size().x + "&height=" + bbox.size().y;

    var imageBase64Data = canvas.toDataURL();

    $.ajax({
     type: "POST",
     url: "/" + SiteDir + "cgi-bin/saveImage.php?name=" + imageName + rectParams,
     data: {
           base64data : imageBase64Data
     },
     dataType: "text",
     success: function(data){
        showDialogCallback();
    }
     });
                          
    return imageName;
}
                          
Application.prototype.LoadGraphFromString = function (str)
{
    var graph = new Graph();
    
    //console.log(str);
    
    var userSettings = {};
    graph.LoadFromXML(str, userSettings);
    if (userSettings.hasOwnProperty("data") && userSettings["data"].length > 0)
        this.LoadUserSettings(userSettings["data"]);
    this.SetDefaultTransformations();
    this.graph = graph;
    this.AutoAdjustViewport();
    this.updateMessage();
    this.redrawGraph();   
}

Application.prototype.LoadGraphFromDisk = function (graphName)
{
	var  app = this;

	$.ajax({
	type: "GET",
	url: "/" + SiteDir + "cgi-bin/loadGraph.php?name=" + graphName
	})
	.done(function( msg ) 
	{
       app.LoadGraphFromString(msg);
	});
}


Application.prototype.GetNewGraphName = function()
{
    var name = this.GetNewName();
    
    if (this.isVertexCommonStyleCustom || this.isVertexSelectedVertexStylesCustom || 
       this.isBackgroundCommonStyleCustom || this.isEdgeCommonStyleCustom || this.isEdgeSelectedStylesCustom)
    {
        name = name + "ZZcst";
    }
    
    return name;
}

Application.prototype.GetNewName = function()
{
    var name = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < this.graphNameLength; i++ )
    {
        name += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return name;
}

Application.prototype.GetGraphName = function()
{
    return this.savedGraphName;
}


Application.prototype.SetDefaultHandler = function()
{
	restButtons ('Default');
	this.SetHandlerMode("default");
}

Application.prototype.GetEnumVertexsList = function()
{
	var res = [];

	for (var i = 0; i < this.enumVertexesTextList.length; i ++)
	{
		var one = {};
		one["text"]  = this.enumVertexesTextList[i].GetText();
		one["value"] = this.enumVertexesTextList[i].GetValue();

		one["select"] = this.enumVertexesTextList[i].GetValue() == this.currentEnumVertesType.GetValue();

		res.push(one);
	}

	return res;
}

Application.prototype.SetEnumVertexsType = function(value)
{
	for (var i = 0; i < this.enumVertexesTextList.length; i ++)
	{
		if (this.enumVertexesTextList[i].GetValue() == value)
		{
			this.currentEnumVertesType = this.enumVertexesTextList[i];
			document.cookie = "enumType=" + value;
			break;
		}
	}

}


Application.prototype.ShowAdjacencyMatrixErrorDialog = function(matrix)
{
	var dialogButtons = {};

	matrixRes = matrix.replace(/\n/g,'%0A');
	dialogButtons[g_readMatrixHelp] = function() {
			window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаСмежности#matrixFormat" : "./wiki/Help/AdjacencyMatrix#matrixFormat");
		};
	dialogButtons[g_fixMatrix] = function() {
			window.location.assign("./create_graph_by_matrix?matrix=" + matrixRes);
		};
	dialogButtons[g_close] = function() {
			$( this ).dialog( "close" );					
		}; 

	$( "#matrixError" ).dialog({
		resizable: false,
		title: g_matrixWrongFormat,
		width: 400,
		modal: true,
		dialogClass: 'EdgeDialog',
		buttons: dialogButtons,
	});
}

Application.prototype.ShowIncidenceMatrixErrorDialog = function(matrix)
{
	var dialogButtons = {};

	matrixRes = matrix.replace(/\n/g,'%0A');
	dialogButtons[g_readMatrixHelp] = function() {
			window.location.assign(g_language == "ru" ? "./wiki/Справка/МатрицаИнцидентности#matrixFormat" : "./wiki/Help/IncidenceMatrix#matrixFormat");
		};
	dialogButtons[g_fixMatrix] = function() {
			window.location.assign("./create_graph_by_incidence_matrix?incidenceMatrix=" + matrixRes);
		};
	dialogButtons[g_close] = function() {
			$( this ).dialog( "close" );					
		}; 

	$( "#matrixErrorInc" ).dialog({
		resizable: false,
		title: g_matrixWrongFormat,
		width: 400,
		modal: true,
		dialogClass: 'EdgeDialog',
		buttons: dialogButtons,
	});
}
                          
Application.prototype.SetFindPathReport = function (value)
{
    this.findPathReport = value;
}
                          
Application.prototype.GetFindPathReport = function ()
{
    return this.findPathReport;
}
                                                    
Application.prototype.GetRealWidth = function ()
{
    return this.canvas.width / this.canvasScale;
}
                          
Application.prototype.GetRealHeight = function ()
{
    return this.canvas.height / this.canvasScale;
}
                          
Application.prototype.SetDefaultTransformations = function()
{
    this.canvasScale = 1.0;
    this.canvasPosition = new Point(0, 0);
}

Application.prototype.AutoAdjustViewport = function()
{
    graphBBox  = this.graph.getGraphBBox();
    bboxCenter = graphBBox.center();
    bboxSize   = graphBBox.size();
                          
    if (bboxSize.length() > 0)
    {
        // Setup size
        if (bboxSize.x > this.GetRealWidth() || bboxSize.y > this.GetRealHeight())
        {
            this.canvasScale = Math.min(this.GetRealWidth() / bboxSize.x, this.GetRealHeight() / bboxSize.y);
        }
                          
        // Setup position.
        if (graphBBox.minPoint.x < 0.0 || graphBBox.minPoint.y < 0.0 ||
            graphBBox.maxPoint.x > this.GetRealWidth() || graphBBox.maxPoint.y > this.GetRealHeight())
        {
            // Move center.
            this.canvasPosition  = graphBBox.minPoint.inverse();
        }
    }
}
                          
Application.prototype.OnAutoAdjustViewport = function()
{
    this.SetDefaultTransformations();
    this.AutoAdjustViewport();
    this.redrawGraph();
}
                          
Application.prototype.getAlgorithmNames = function()
{
    var res = [];
    for (var i = 0; i < g_Algorithms.length; i++)
    {
        factory = g_Algorithms[i];
        var obj = {};
        oneFactory = factory(this.graph);
        obj.name = oneFactory.getName(g_language);
        obj.id   = oneFactory.getId();
        obj.priority = oneFactory.getPriority();
        res.push(obj);
    }
    
    res.sort(function (a, b) {
      return a.priority - b.priority;
    });
    
    return res;
}
   
Application.prototype.resultCallback = function(paths)
{
    console.log(paths);
    if ((paths instanceof Object) && "paths" in paths)
    {
        this.setRenderPath(paths["paths"][0], "minPath" in paths);
    }
    this.updateMessage();
    this.redrawGraph();
}

Application.prototype.GetCurrentValue = function(paramName, defaultValue)
{
    return (paramName in this.algorithmsValues) ? this.algorithmsValues[paramName] : defaultValue;
}

Application.prototype.SetCurrentValue = function(paramName, value)
{
    this.algorithmsValues[paramName] = value;
}

Application.prototype.IsGraphFitOnViewport = function()
{
    res = true;
    graphBBox  = this.graph.getGraphBBox();
    var canvasWidth  = this.GetRealWidth();//  * this.canvasScale;
    var canvasHeight = this.GetRealHeight();// * this.canvasScale;
    var canvasPositionInverse = this.canvasPosition./*multiply(this.canvasScale).*/inverse();
    //console.log("BBox_min = " + graphBBox.minPoint.toString() + " - BBox_max = " + graphBBox.maxPoint.toString()
    //    + " Position" + canvasPositionInverse.toString() + " - cw = " + canvasWidth + " ch = " + canvasHeight);
    
    return (Math.floor(canvasPositionInverse.x) <= Math.floor(graphBBox.minPoint.x) &&
        Math.floor(canvasPositionInverse.y) <= Math.floor(graphBBox.minPoint.y) && Math.floor(canvasPositionInverse.x + canvasWidth) >= Math.floor(graphBBox.maxPoint.x)
        && Math.floor(canvasPositionInverse.y + canvasHeight) >= Math.floor(graphBBox.maxPoint.y));
}

Application.prototype.PushToStack = function(actionName)
{
    var object        = {};
    object.actionName = actionName;
    object.graphSave  = this.graph.SaveToXML("");    
    
    this.undoStack.push(object);
    
    while (this.undoStack.length > this.maxUndoStackSize)
    {
        this.undoStack.shift();
    }
}

Application.prototype.Undo = function()
{
    if (this.IsUndoStackEmpty())
        return;
    
    var state  = this.undoStack.pop();
    this.graph = new Graph();
    var empty;
    this.graph.LoadFromXML(state.graphSave, empty);
    this.redrawGraph();
}

Application.prototype.ClearUndoStack = function()
{
    this.undoStack = [];
}

Application.prototype.IsUndoStackEmpty = function()
{
    return (this.undoStack.length <= 0);
}

Application.prototype.SaveUserSettings = function()
{
    var res = "{";
    
    var needEnd    = false;
    var checkValue = [];
    
    checkValue.push({field: "edgeCommonStyle",
                     value: this.edgeCommonStyle,
                     check: this.isEdgeCommonStyleCustom});
    
    checkValue.push({field: "edgeSelectedStyles",
                     value: this.edgeSelectedStyles,
                     check: this.isEdgeSelectedStylesCustom});

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});
    
    checkValue.push({field: "vertexCommonStyle",
                     value: this.vertexCommonStyle,
                     check: this.isVertexCommonStyleCustom});
    
    checkValue.push({field: "vertexSelectedVertexStyles",
                     value: this.vertexSelectedVertexStyles,
                     check: this.isVertexSelectedVertexStylesCustom});
    
    checkValue.push({field: "backgroundCommonStyle",
                     value: this.backgroundCommonStyle,
                     check: this.isBackgroundCommonStyleCustom});
    
    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});
    
    checkValue.forEach(function(entry) {
            if (!entry.check)
                return;
                
            if (needEnd)
                res = res + ",";
                
            res = res + "\"" + entry.field + "\"" + ":" + JSON.stringify(entry.value);
            needEnd = true;
        });
    
    res = res + "}";
    
    return this.EncodeToHTML(res);
}

Application.prototype.LoadUserSettings = function(json)
{
    var checkValue = [];
    
    checkValue.push({field: "edgeCommonStyle",
                     value: this.edgeCommonStyle,
                     check: "isEdgeCommonStyleCustom"});
    
    checkValue.push({field: "edgeSelectedStyles",
                     value: this.edgeSelectedStyles,
                     check: "isEdgeSelectedStylesCustom"});

    //checkValue.push({field: "edgePrintCommonStyle",
    //                 value: this.edgePrintCommonStyle});

    //checkValue.push({field: "edgePrintSelectedStyles",
    //                 value: this.edgePrintSelectedStyles});
    
    checkValue.push({field: "vertexCommonStyle",
                     value: this.vertexCommonStyle,
                     check: "isVertexCommonStyleCustom"});
    
    checkValue.push({field: "vertexSelectedVertexStyles",
                     value: this.vertexSelectedVertexStyles,
                     check: "isVertexSelectedVertexStylesCustom"});
    
    //checkValue.push({field: "vertexPrintCommonStyle",
    //                 value: this.vertexPrintCommonStyle});

    //checkValue.push({field: "vertexPrintSelectedVertexStyles",
    //                 value: this.vertexPrintSelectedVertexStyles});
    
    checkValue.push({field: "backgroundCommonStyle",
                     value: this.backgroundCommonStyle,
                     check: "isBackgroundCommonStyleCustom"});
    
    var decoderStr = this.DecodeFromHTML(json);
    var parsedSave = JSON.parse(decoderStr);
    
    var app = this;
    
    checkValue.forEach(function(entry) {
            if (parsedSave.hasOwnProperty(entry.field))
            {
                for(var k in parsedSave[entry.field]) 
                    entry.value[k] = parsedSave[entry.field][k];
                
                app[entry.check] = true;
            }
        });
}

Application.prototype.EncodeToHTML = function (str)
{
    return str.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
}

Application.prototype.DecodeFromHTML = function (str)
{
   return str.replace(/&apos;/g, "'")
               .replace(/&quot;/g, '"')
               .replace(/&gt;/g, '>')
               .replace(/&lt;/g, '<')
               .replace(/&amp;/g, '&'); 
}

Application.prototype.SetVertexStyle = function (index, style)
{
    if (index == 0)
    {
        this.vertexCommonStyle = style;
        this.isVertexCommonStyleCustom = true;
    }
    else
    {
        this.vertexSelectedVertexStyles[index - 1] = style;
        this.isVertexSelectedVertexStylesCustom = true;
    }
}

Application.prototype.ResetVertexStyle = function (index)
{
    if (index == 0)
    {
        this.vertexCommonStyle = new CommonVertexStyle();
        this.isVertexCommonStyleCustom = false;
    }
    else
    {
        this.vertexSelectedVertexStyles = DefaultSelectedGraphStyles.slice();
        this.isVertexSelectedVertexStylesCustom = false;
    }
}

Application.prototype.SetEdgeStyle = function (index, style)
{
    if (index == 0)
    {
        this.edgeCommonStyle = style;
        this.isEdgeCommonStyleCustom = true;
    }
    else
    {
        this.edgeSelectedStyles[index - 1] = style;
        this.isEdgeSelectedStylesCustom = true;
    }
}

Application.prototype.ResetEdgeStyle = function (index)
{
    if (index == 0)
    {
        this.edgeCommonStyle = new CommonEdgeStyle();
        this.isEdgeCommonStyleCustom = false;
    }
    else
    {
        this.edgeSelectedStyles = DefaultSelectedEdgeStyles.slice();
        this.isEdgeSelectedStylesCustom = false;
    }
}

Application.prototype.SetBackgroundStyle = function (style)
{
    this.backgroundCommonStyle         = style;
    this.isBackgroundCommonStyleCustom = true;
}

Application.prototype.ResetBackgroundStyle = function ()
{
    this.backgroundCommonStyle         = new CommonBackgroundStyle();
    this.isBackgroundCommonStyleCustom = false;
}

Application.prototype.GetAvalibleCruvledValue = function(neighbourEdges, originalEdge)
{
    var values = [];
    
    for (var i = 0; i < neighbourEdges.length; i ++)
    {
      var edge          = neighbourEdges[i];
      var sameDirection = (originalEdge.vertex1.id == edge.vertex1.id);
      if (edge.model.type == EdgeModels.cruvled)
      {
        values[(sameDirection ? edge.model.curvedValue : -edge.model.curvedValue)] = true;
      }
    }
    
    var changeValue  = DefaultHandler.prototype.curvedValue;
    var defaultValue = 0.0;
    var maxSearch    = 10;
    
    for (var i = 1; i < maxSearch; i ++)
    {
        value = i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;

        value = - i * changeValue;
        if (!values.hasOwnProperty(value))
            return value;
    }
    
    return defaultValue;
}

Application.prototype.GraphTypeChanged = function()
{
    $("#CanvasMessage").text(this.graph.isMulti() ? g_GrapsIsMultiMessage : g_GrapsIsGeneralMessage);
}
var SiteDir     = "";

var application = new Application(document, window);

var waitCounter = false;
var fullscreen  = false;
var userAction = function(str)
{
    if (typeof window.yaCounter25827098 !== "undefined")
    {
        console.log(g_language + "/" + str);
        window.yaCounter25827098.hit(window.location.protocol + "//" + window.location.hostname + (g_language != "ru" ? "/" + g_language : "") + "/UserAction#" + str);
    }
    else if (!waitCounter)
    {
        waitCounter = true;
        setTimeout(function()
                   {
                     userAction(str);
                   }, 2000);
    }
}

var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1 
           || navigator.userAgent.toLowerCase().indexOf("trident") != -1);

var buttonsList = ['AddGraph', 'ConnectGraphs', 'DeleteObject', 'Default'];

function restButtons (me)
{
    var needSetDefault = false;
	for (var i = 0; i < buttonsList.length; i ++)
	{
		if (buttonsList[i] != me)
		{
			document.getElementById(buttonsList[i]).className = "btn btn-default btn-sm";
		}
		else
		{
			if (document.getElementById(buttonsList[i]).className != "btn btn-default btn-sm")
			{
				needSetDefault = true;	
			}
		}
	}
	if (needSetDefault)
	{
		document.getElementById(buttonsList[i]).className = "btn btn-primary btn-sm";
	}
	else
	{
		document.getElementById(me).className = "btn btn-primary btn-sm";
	}
}

var single = 0;

function resizeCanvas()
{
  var adv = document.getElementById('adv');
  var canvas    = document.getElementById('canvas');
  canvas.width  = document.getElementById('canvasSection').offsetWidth;
  var mainContainer = document.getElementById('mainContainer');
  var offset = (mainContainer.offsetTop + mainContainer.offsetHeight) - (canvas.offsetTop + canvas.offsetHeight) + ($("#footerContent").css("display") === 'block' ? 0 : 24);
        
  canvas.height = $(window).height() - document.getElementById('canvas').offsetTop - (adv && $("#adv").css("display") === 'block' ? document.getElementById('adv').offsetHeight : 0) - ($("#footer").css("display") === 'block' ? document.getElementById('footer').offsetHeight : 0) - offset;

  application.redrawGraph();
}

function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              first.screenX, first.screenY, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);

	first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function preLoadPage()
{
	loadTexts();
	application.onLoad();
}

function createAlgorithmMenu()
{
    var algorihtmsBaseId = "Algo";
    var algorithms = application.getAlgorithmNames();
    var index = 0;

    for (var i = 0; i < algorithms.length; i++)
    {
        algorithm = algorithms[i];
        
        var list   = document.getElementById("algorithmList");
        var item   = list.lastElementChild;
        var clone  = item.cloneNode(true);
        var button   = clone.getElementsByTagName("button")[0];
        var textSpan = button.getElementsByTagName("span")[1];
        button.id = algorithm.id;
        textSpan.innerHTML = algorithm.name;
        clone.style.display = "block";
        
        buttonsList.push(algorithm.id);
        
        button.onclick = function ()
        {
            userAction(this.id);
            restButtons (this.id);
            application.SetHandlerMode(this.id);
        }
        
        var eventData = {};
        eventData.index     = i;
        eventData.object    = clone;
        eventData.algorithm = algorithm;
        
        $("#openAlgorithmList").bind('click', eventData, function (_eventData) {
            var data      = _eventData.data;
            var algorithm = g_Algorithms[g_AlgorithmIds.indexOf(data.algorithm.id)](application.graph, application);
            
            if (application.graph.isMulti() && !algorithm.IsSupportMultiGraph())
              $(data.object).hide();
            else
              $(data.object).show();
          });
        
        list.appendChild(clone);
        index++;
    }

}

    
function handelImportGraph(files) {
    var graphFileToLoad = files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        console.log(textFromFileLoaded);
        application.LoadGraphFromString(textFromFileLoaded);
        ImportGraphFiles.value = "";
    };

    fileReader.readAsText(graphFileToLoad, "UTF-8");
}

function postLoadPage()
{
    application.userAction = userAction;
    
	application.canvas.onmousemove = function (e)
		{
			return application.CanvasOnMouseMove(e);
		};

	application.canvas.onmousedown = function (e)
		{
			return application.CanvasOnMouseDown(e);
		};
		
	application.canvas.onmouseup   = function (e)
		{
			return application.CanvasOnMouseUp(e);
		}
    
    application.canvas.onmousewheel = function (e)
    {
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if (delta > 0)
        {
            application.multCanvasScale(1.3);
        }
        else
        {
            application.multCanvasScale(1.0 / 1.3);
        }
    }
    
    function getCharCode(event) {
      if (event.which == null) { // IE
        return event.keyCode;
      }

      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        return event.which; // остальные
      }

      return null; // спец. символ
    }
    
    function getChar(event) {
        return String.fromCharCode(getCharCode(event)); // остальные
    }
    
    function selectHandler(buttonName, handlerName)
    {
            userAction(buttonName + "_shortcut");
			restButtons (buttonName);
			application.SetHandlerMode(handlerName);  
    }
    
    document.onkeypress   = function (e)
    {
        if (event.defaultPrevented
            || ($('#addVertex').hasClass('ui-dialog-content') && $('#addVertex').dialog('isOpen'))
            || ($('#adjacencyMatrix').hasClass('ui-dialog-content') && $('#adjacencyMatrix').dialog('isOpen'))
            || ($('#addEdge').hasClass('ui-dialog-content') && $('#addEdge').dialog('isOpen'))
            || ($('#incidenceMatrix').hasClass('ui-dialog-content') && $('#incidenceMatrix').dialog('isOpen'))
            || ($('#saveDialog').hasClass('ui-dialog-content') && $('#saveDialog').dialog('isOpen'))
            || ($('#saveImageDialog').hasClass('ui-dialog-content') && $('#saveImageDialog').dialog('isOpen'))
            || ($('#GroupRenameDialog').hasClass('ui-dialog-content') && $('#GroupRenameDialog').dialog('isOpen'))
            || $('#developerTools').css("display") != "none"
            || ($('#NeedAlgorithm').hasClass('ui-dialog-content') && $('#NeedAlgorithm').dialog('isOpen')))
        {
            console.log("prevent");
            return; // Should do nothing if the default action has been cancelled
        }
        
        
        var key = getChar(event);
        var code = getCharCode(event);
        console.log(key + " code=" + code);
        
        var moveValue = 10;
        if (code == 61 || code == 43) // +
        {
            application.multCanvasScale(1.5);
        }
        else if (code == 45) // -
        {
            application.multCanvasScale(1 / 1.5);
        }
        else if (key == 'w' || key == 'ц') // up
        {
            application.onCanvasMove(new Point(0, moveValue));
        }
        else if (key == 's' || key == 'ы') // down
        {
            application.onCanvasMove(new Point(0, -moveValue));
        }
        else if (key == 'a' || key == 'ф') // left
        {
            application.onCanvasMove(new Point(moveValue, 0));
        }
        else if (key == 'd' || key == 'в') // right
        {
            application.onCanvasMove(new Point(-moveValue, 0));
        }
        else if (key == 'v' || key == 'м') // vertex
        {
            selectHandler('AddGraph', 'addGraph');
        }
        else if (key == 'e' || key == 'у') // edge
        {
            selectHandler('ConnectGraphs', 'addArc');
        }
        else if (key == 'r' || key == 'к') // delete
        {
            selectHandler('DeleteObject', 'delete');
        }
        // Disabled becase it is easy to lose graph, when you press miss letter.
        //else if (key == 'n' || key == 'т') // new
        //{
        //    userAction('NewGraph_shortcut');
		//	application.SetHandlerMode("deleteAll");
        //    application.SetDefaultTransformations();
        //}
        else if (key == 'm' || key == 'ь') // move
        {
            selectHandler('Default', 'default');
        }
    }

	document.getElementById('ShowAdjacencyMatrix').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("showAdjacencyMatrix");
		}		
	document.getElementById('ShowIncidenceMatrix').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("showIncidenceMatrix");
		}
	document.getElementById('ShowDistanceMatrix').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("showDistanceMatrix");
		}
    
	document.getElementById('GroupRename').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("GroupRename");
		}
	document.getElementById('groupRenameButton').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("GroupRename");
		}
    
		
	document.getElementById('Default').onclick = function ()
		{
            userAction(this.id);
			restButtons ('Default');
			application.SetHandlerMode("default");
			document.getElementById('Default').className = "btn btn-primary btn-sm";			
		}		
		
	document.getElementById('AddGraph').onclick = function ()
		{
            userAction(this.id);
			restButtons ('AddGraph');
			application.SetHandlerMode(document.getElementById('AddGraph').className != "" ? "addGraph" : "default");
		}
	
	document.getElementById('ConnectGraphs').onclick = function ()
		{
            userAction(this.id);
			restButtons ('ConnectGraphs');
			application.SetHandlerMode(document.getElementById('ConnectGraphs').className != "" ? "addArc" : "default");
		}	
	
	document.getElementById('DeleteObject').onclick = function ()
		{
            userAction(this.id);
			restButtons ('DeleteObject');
			application.SetHandlerMode(document.getElementById('DeleteObject').className != "" ? "delete" : "default");
		}

	document.getElementById('DeleteAll').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("deleteAll");
		}


	document.getElementById('SaveGraph').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("saveDialog");
		}

	document.getElementById('NewGraph').onclick = function ()
		{
            userAction(this.id);
			application.SetHandlerMode("deleteAll");
            application.SetDefaultTransformations();
		}
    
    document.getElementById('SaveGraphImage').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("saveDialogImage");
    }
    
    document.getElementById('SaveFullGraphImage').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("saveDialogFullImage");
    }

    document.getElementById('SavePrintGraphImage').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("savePrintGraphImage");
    }
    
    document.getElementById('Zoom100').onclick = function ()
    {
        userAction(this.id);
        application.setCanvasScale(1.0);
    }
    
    document.getElementById('Zoom50').onclick = function ()
    {
        userAction(this.id);
        application.setCanvasScale(50 / 100);
    }
    
    document.getElementById('Zoom25').onclick = function ()
    {
        userAction(this.id);
        application.setCanvasScale(25 / 100);
    }
  
    document.getElementById('ZoomFit').onclick = function ()
    {
        userAction(this.id);
        application.OnAutoAdjustViewport();
    }
    
    document.getElementById('ZoomIn').onclick = function ()
    {
        userAction(this.id);
        application.multCanvasScale(1.5);
    }
    
    document.getElementById('ZoomOut').onclick = function ()
    {
        userAction(this.id);
        application.multCanvasScale(1.0 / 1.5);
    }
    
    document.getElementById('MoveWorspace').onclick = function ()
    {
        userAction(this.id);
        restButtons ('Default');
        application.SetHandlerMode("default");
        document.getElementById('Default').className = "btn btn-primary btn-sm";
    }
    document.getElementById('SetupVertexStyle').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("setupVertexStyle");
    }
    document.getElementById('SetupVertexStyleSelected').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("setupVertexStyleSelected");
    }
    document.getElementById('SetupEdgeStyle').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("setupEdgeStyle");
    }
    document.getElementById('SetupEdgeStyleSelected').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("setupEdgeStyleSelected");
    }
    document.getElementById('SetupBackgroundStyle').onclick = function ()
    {
        userAction(this.id);
        application.SetHandlerMode("setupBackgroundStyle");
    }
    
    document.getElementById('runUserScript').onclick = function ()
    {
        var el = document.getElementById('userScript');
        
        var oldScript = document.getElementById("userScriptSource");
        if (oldScript)
        {
            document.head.removeChild(oldScript);
        }
        
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.innerHTML = el.value;
        script.id = "userScriptSource";
        document.head.appendChild(script);
        
        application.SetHandlerMode("user.algorithm");
    }
    
    document.getElementById('submitUserScript').onclick = function ()
    {
        var script = document.getElementById('userScript');
        var data = "message=" + script.value + "&";
    
        $.ajax({
            type: "POST",
            url: "/feedback",
            data: data
        });
        
        $( "#sentAlgorithm" ).dialog({
                                     resizable: false,
                                     height: "auto",
                                     width:  400,
                                     modal: true,
                                     dialogClass: 'EdgeDialog'
                                     });
    }
    
    document.getElementById('devToolsZoom').onclick = function ()
    {
        var devTools = document.getElementById('developerTools');
        if (devTools.hasOwnProperty("isMin") && !devTools["isMin"])
        {
            devTools["isMin"] = true;
            devTools.style.width = "30%";
        }
        else
        {
            devTools["isMin"] = false;
            devTools.style.width = "100%";
        }
    }
    
    document.getElementById('ExportGraph').onclick = function ()
    {
        userAction(this.id);
        
        var graphAsString  = application.graph.SaveToXML("");
        var savedGraphName = application.GetNewGraphName();
        
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(graphAsString));
        element.setAttribute('download', "graph_" + savedGraphName + ".graphml");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    
    document.getElementById('ImportGraph').onclick = function ()
    {
        userAction(this.id);
        
        if (ImportGraphFiles) {
            ImportGraphFiles.click();
        }
    }
    
    document.getElementById('openAlgorithmList').onclick = function()
    {
        // Show menu first
        setTimeout(function() 
                   {
                        var button = document.getElementById('openAlgorithmList');
                        var buttonRect = button.getBoundingClientRect();
                        var algorithmList = document.getElementById('algorithmList');
            
                        var delta = buttonRect.right - algorithmList.offsetWidth;
                        if (delta < 0)
                        {
                            var value = (delta - 4) + "px";
                            algorithmList.style.right = value;
                        }
                        else
                        {
                             algorithmList.style.right = "0";   
                        }
                   }, 1);
    }
    
    document.getElementById('Fullscreen').onclick = function()
    {
        var idList = ["h1Header", "h1Text", "navigation", "footerContent"];
        
        fullscreen = !fullscreen
        
        userAction(fullscreen ? "fullscreen_on" : "fullscreen_off");
        
        for (var i = 0; i < idList.length; i++)
            if (fullscreen)
                document.getElementById(idList[i]).style.display = "none";    
            else
                document.getElementById(idList[i]).style.display = "block";
                
        document.getElementById("mainContainer").className = fullscreen ? "container-fluid page-wrap" : "container page-wrap";
        
        document.getElementById("FullscreenIcon").className = fullscreen ? "glyphicon glyphicon-resize-small fa-fw" : "glyphicon glyphicon-resize-full fa-fw";

        resizeCanvas();
    }
    
    if (document.getElementById('VoteButton') !== null)
    document.getElementById('VoteButton').onclick = function ()
    {
        var dialogButtons = {};
        
        for (var i = 0; i < 6 && document.getElementById('vote' + i) !== null; i++)
        {
            document.getElementById('vote' + i)["voteIndex"] = i;
            document.getElementById('vote' + i).onclick = function ()
            {
                console.log("Vote" + this["voteIndex"]);
                $.ajax({
                type: "GET",
                url: "/" + SiteDir + "cgi-bin/vote.php?index=" + this["voteIndex"],
                dataType: "text"
                });
                $("#voteDialog").dialog('close');
                $("#VoteButton").hide();
            }
        }

        dialogButtons[g_close] = function() {
                $( this ).dialog( "close" );					
            }; 

        $( "#voteDialog" ).dialog({
            resizable: false,
            title: g_vote,
            width: 400,
            modal: true,
            dialogClass: 'EdgeDialog',
            buttons: dialogButtons,
        });
    }
    
    
    // Get algorithms list and load it.
    $.get( "/" + SiteDir + "cgi-bin/getPluginsList.php",
            function( data )
            {
                var scriptList = JSON.parse(data);
          
                var loadOneScript = function()
                {
                    if (scriptList.length == 0)
                    {
                        createAlgorithmMenu();
                    }
                    else
                    {
                        var script = document.createElement('script');
                        script.src = "/" + SiteDir + "script/" + scriptList[0];
                        scriptList.shift();
                        script.onload  = loadOneScript;
                        script.onerror = loadOneScript;
                        document.head.appendChild(script);
                    }
                }
          
                loadOneScript();
          
            });



    var devTools = document.getElementById('developerTools');
    devTools.style.left = 0;
	resizeCanvas();
	application.onPostLoadEvent();
}

//window.onload = function ()
$(document).ready(function ()
{

	window.onresize = function(event) 
		{
			resizeCanvas();
		}


    document.getElementById('canvas').addEventListener("touchstart", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchmove", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchend", touchHandler, true);
    document.getElementById('canvas').addEventListener("touchcancel", touchHandler, true);

/*
	$(document).ready(function(){
	    //set up some basic options for the feedback_me plugin
	    fm_options = {
	        position: "left-bottom",
	        message_placeholder: g_what_do_you_think,
	        message_required: true,
	        name_label: g_name,
	        message_label: g_feedback,
	        trigger_label: g_feedback,
	        submit_label: g_send,
	        title_label: g_write_to_us,	        
	        feedback_url: "/feedback",
	    };
	    //init feedback_me plugin
	    fm.init(fm_options);
	});
*/
});

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}
/**
 * Find short path.
 *
 */
function BaseTraversal(graph, app)
{
    BaseAlgorithmEx.apply(this, arguments);
    this.visited = [];
    this.edges   = [];
    this.timer   = null;
}

// inheritance.
BaseTraversal.prototype = Object.create(BaseAlgorithmEx.prototype);
// timer interval
BaseTraversal.prototype.timerInterval = 500;

BaseTraversal.prototype.result = function(resultCallback)
{
    var result = {};
    result["version"] = 1;
    
    return result;
}

BaseTraversal.prototype.selectVertex = function(vertex)
{
	this.visited = [];
    this.edges   = [];

    if (this.timer)
        clearTimeout(this.timer);
    this.timer   = null;
    
    this.visited.push(vertex);

    var context = this;
    this.timer  = setInterval(function()
                             {
                               context.step();
                             }, this.timerInterval);

    this.message = this.getMainMessage();

    return true;
}

BaseTraversal.prototype.getObjectSelectedGroup = function(object)
{
    return (this.visited.includes(object) ? 1 : (this.edges.includes(object) ? 1 : 0));
}

BaseTraversal.prototype.instance = function()
{
    return false;
}
