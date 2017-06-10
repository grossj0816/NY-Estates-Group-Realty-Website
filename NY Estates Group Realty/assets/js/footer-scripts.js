/*This script is designed to access and modify the footer of all the footer items*/

function updateFooter(footerParagraph, footerOffice, footerAddress, footerNumber)
{
  var elFooterParagraph = document.getElementById('footerParagraph');
  var elFooterOffice = document.getElementById('footerOffice');
  var elFooterAddress = document.getElementById('footerAddress');
  var elFooterNumber = document.getElementById('footerNumber');

  elFooterParagraph.textContent = footerParagraph;
  elFooterOffice.textContent = footerOffice;
  elFooterAddress.textContent = footerAddress;
  elFooterNumber.textContent = footerNumber;
}

updateFooter('NY Estates Group Realty was funded 14 years ago by Andrea S Gross. From starting NY Estates G.R. on her own,  Andrea has built this company to provide the best service for people who want to purchase commercial properties and homes that they will call theirs forever.',
'Saint Albans Office', '205754 Linden Blvd, Saint Albans, NY 11412', '(718) 341-2618');
