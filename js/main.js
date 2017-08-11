'use strict';
var getAnswerBtnp = document.getElementById( 'getResultp' );
var getAnswerBtnt = document.getElementById( 'getResultt' );
var getAnswerBtnm = document.getElementById( 'getResultm' );

function calculatep( a, b, ans ) {
	var c = parseInt( a ) + parseInt( b );
	ans.innerHTML = c;
}

function calculatet( a, b, ans ) {
	var c = parseInt( a ) * parseInt( b );
	ans.innerHTML = c;
}

function calculatem( a, b, ans ) {
	var c = parseInt( a ) - parseInt( b );
	ans.innerHTML = c;
}
getAnswerBtnp.addEventListener( 'click', function() {
	var first = document.getElementById( 'first' ).value;
	var second = document.getElementById( 'second' ).value;
	var totalCont = document.getElementById( 'result' );
	calculatep( first, second, totalCont );
} );
getAnswerBtnt.addEventListener( 'click', function() {
	var first = document.getElementById( 'first' ).value;
	var second = document.getElementById( 'second' ).value;
	var totalCont = document.getElementById( 'result' );
	calculatet( first, second, totalCont );
} );
getAnswerBtnm.addEventListener( 'click', function() {
	var first = document.getElementById( 'first' ).value;
	var second = document.getElementById( 'second' ).value;
	var totalCont = document.getElementById( 'result' );
	calculatem( first, second, totalCont );
} );
var mylist = [ 'item1', 'item2', 'item3', 'item4' ];
mylist.forEach( function( thing ) {
	let mylist = document.getElementById( 'myList' );
	mylist.innerHTML += '<li>' + thing + '</li>';
	console.log( thing );
} );
var listBtn = document.getElementById( 'styleBtn' );

function style( a ) {
	if ( a.classList.contains( 'flex-cont' ) ) {
		a.classList.remove( 'flex-cont' )
	} else {
		a.classList.add( 'flex-cont' );
	}
}
listBtn.addEventListener( 'click', function() {
	var list = document.getElementById( 'myList' );
	style( list );
} );
