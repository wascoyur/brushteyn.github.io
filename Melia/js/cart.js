$(function(){
    function calculatePrice(){
        var $cartItems = $('[data-cart-item]'),
            $totalPrice = $('.shopping-cart-goods-footer-text-red'),
            totalPrice = 0;
        
        $cartItems.each(function(index, item){
            var $item = $(item),
                $sum = $item.find('.shopping-cart-goods-totalprice > p'),
                price = parseInt($item.find('.shopping-cart-goods-price > p').html()),
                qty = $item.find('.shopping-cart-goods-quantity > input').val(),
                sum = price * qty;
            
            $sum.html(sum + ' руб.');
            totalPrice += sum;
        });
        
        $totalPrice.html(totalPrice);
    }
    
    $('[data-cart-item]').on('click', '.minus-btn, .plus-btn', function(){
        calculatePrice();
    }).on('click', '.shopping-cart-goods-delete-btn', function(e){
        $(e.delegateTarget).remove();
        calculatePrice();
    });
    
    calculatePrice();
    
});