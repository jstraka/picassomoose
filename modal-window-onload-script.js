// This code triggers the modal popup window on page load

<script type="text/javascript">
  CMS.jQuery(window).on('load', function() {
    CMS.jQuery('#myModal').modal('show');
  }); 
</script>