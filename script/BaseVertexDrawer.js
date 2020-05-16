/**
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
	this.mainTextColor  = 'green';
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

	this.strokeStyle = '#8C4C86';
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

