'use strict';

(function(doc) {
  let $wrapAction = doc.querySelector('.wrap-action');
  let $ejs = doc.querySelector('.ejs');

  $wrapAction.addEventListener('click', (event) => {
    let $target = event.target;

    if($target.classList.contains('action')) {
      $ejs.setAttribute('data-color', $target.getAttribute('data-color'))
    };
  });
}(document));
