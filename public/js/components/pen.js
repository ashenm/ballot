// DOM elements
const pen = Object.create(null);

// pen button
pen.pen = document.createElement('button');
pen.icon = document.createElement('i');

// modal
pen.modal = document.createElement('div');
pen.document = document.createElement('div');
pen.content = document.createElement('div');

// modal header
pen.header = document.createElement('div');
pen.title = document.createElement('h5');
pen.btnDismiss = document.createElement('button');
pen.labelDismiss = document.createElement('span');

// modal body
pen.body = document.createElement('div');
pen.form = document.createElement('form');

// poll metadata
pen.metadata = document.createElement('fieldset');
pen.containerName = document.createElement('div');
pen.labelName = document.createElement('label');
pen.name = document.createElement('input');
pen.containerDesc = document.createElement('div');
pen.labelDesc = document.createElement('label');
pen.desc = document.createElement('input');

// poll options
pen.options = document.createElement('fieldset');
pen.labelOptions = document.createElement('legend');
pen.containerOptions = document.createElement('div');
pen.option = document.createElement('input');
pen.btnAddOptions = document.createElement('input');

// modal footer
pen.footer = document.createElement('div');
pen.btnSubmit = document.createElement('button');

// populate element text contents
pen.title.innerText = 'New Poll';
pen.labelDismiss.innerHTML = '&times;';
pen.labelName.innerText = 'Name';
pen.labelDesc.innerText = 'Description';
pen.labelOptions.innerText = 'Options';
pen.btnSubmit.innerText = 'Create Poll';

// contour pen button
pen.pen.setAttribute('type', 'button');
pen.pen.setAttribute('data-toggle', 'modal');
pen.pen.setAttribute('data-target', '#create-poll');
pen.pen.setAttribute('style', 'position: absolute; bottom: 5%; right: 5%;');
pen.pen.classList.add('btn', 'btn-primary', 'rounded-circle');

// contour pen icon
pen.icon.setAttribute('style', 'font-size: x-large;');
pen.icon.classList.add('ion-edit');

// contour modal container
pen.modal.setAttribute('id', 'create-poll');
pen.modal.setAttribute('tabindex', '-1');
pen.modal.setAttribute('role', 'dialog');
pen.modal.setAttribute('aria-labelledby', 'create a new poll');
pen.modal.setAttribute('aria-hidden', 'true');
pen.modal.classList.add('modal', 'fade');

// contour modal content containers
pen.document.setAttribute('role', 'document');
pen.document.classList.add('modal-dialog', 'modal-sm');
pen.content.classList.add('modal-content');
pen.header.classList.add('modal-header');
pen.title.classList.add('modal-title');
pen.body.classList.add('modal-body');

// contour modal dismiss button
pen.btnDismiss.setAttribute('type', 'button');
pen.btnDismiss.setAttribute('data-dismiss', 'modal');
pen.btnDismiss.setAttribute('aria-label', 'Close');
pen.labelDismiss.setAttribute('aria-hidden', 'true');
pen.btnDismiss.classList.add('close');

// contour poll form
pen.form.setAttribute('id', 'poll-form');
pen.metadata.setAttribute('name', 'metadata');

// contour poll metadata container
pen.containerName.classList.add('form-group');
pen.labelName.classList.add('h6');
pen.containerDesc.classList.add('form-group');
pen.labelDesc.classList.add('h6');

// contour poll name input
pen.name.setAttribute('type', 'text');
pen.name.setAttribute('name', 'poll');
pen.name.classList.add('form-control');

// contour poll description input
pen.desc.setAttribute('type', 'text');
pen.desc.setAttribute('name', 'desc');
pen.desc.classList.add('form-control');

// contour poll options container
pen.options.setAttribute('name', 'options');
pen.labelOptions.classList.add('h6');
pen.containerOptions.classList.add('form-group', 'text-center');

// contour poll option input prototype
pen.option.setAttribute('type', 'text');
pen.option.setAttribute('name', 'options');
pen.option.classList.add('form-control', 'mb-2');

// contour extra poll option adder
pen.btnAddOptions.setAttribute('type', 'button');
pen.btnAddOptions.setAttribute('value', '+');
pen.btnAddOptions.setAttribute('style', 'background-color: transparent; border-radius: 25px; border: 0.5px #aaa solid; vertical-align: middle;');
pen.btnAddOptions.classList.add('text-muted');

// contour modal footer container
pen.footer.classList.add('modal-footer', 'justify-content-center', 'pt-0');
pen.footer.setAttribute('style', 'border: none;');

// contour form submit button
pen.btnSubmit.setAttribute('type', 'button');
pen.btnSubmit.setAttribute('form', 'poll-form');
pen.btnSubmit.classList.add('btn', 'btn-primary');

// assemble pen
pen.pen.appendChild(pen.icon);

// assemble modal header
pen.btnDismiss.appendChild(pen.labelDismiss);
pen.header.appendChild(pen.title);
pen.header.appendChild(pen.btnDismiss);

// assemble poll name metadata componant
pen.containerName.appendChild(pen.labelName);
pen.containerName.appendChild(pen.name);

// assemble poll description metadata componant
pen.containerDesc.appendChild(pen.labelDesc);
pen.containerDesc.appendChild(pen.desc);

// assemble poll metadata componant
pen.metadata.appendChild(pen.containerName);
pen.metadata.appendChild(pen.containerDesc);

// assemble poll options componant
pen.options.appendChild(pen.labelOptions);
pen.options.appendChild(pen.containerOptions);

// assemble poll options input componant
pen.containerOptions.appendChild(pen.option.cloneNode());
pen.containerOptions.appendChild(pen.option.cloneNode());
pen.containerOptions.appendChild(pen.btnAddOptions);

// assemble form
pen.form.appendChild(pen.metadata);
pen.form.appendChild(pen.options);

// assemble modal body and footer
pen.body.appendChild(pen.form);
pen.footer.appendChild(pen.btnSubmit);

// assemble complete modal
pen.content.appendChild(pen.header);
pen.content.appendChild(pen.body);
pen.content.appendChild(pen.footer);
pen.document.appendChild(pen.content);
pen.modal.appendChild(pen.document);

// inject modal into document body
document.body.appendChild(pen.modal);
document.body.appendChild(pen.pen);

// inject additional option input fields on user request
pen.btnAddOptions.addEventListener('click', function(e) {
  pen.containerOptions.insertBefore(pen.option.cloneNode(), this);
});

pen.form.addEventListener('submit', function(e) {
  // TODO form submission via AJAX
  return false;
});