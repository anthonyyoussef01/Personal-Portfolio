---
title: Loading...
layout: page
---

<script setup>
if (typeof window !== 'undefined') {
  setTimeout(() => {
    window.location.href = '/resume';
  }, 1500);
}
</script>

<div class="redirect-container">
  Redirecting to the resume<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
</div>

<style>
.redirect-container {
  text-align: center;
  padding-top: 40px;
  font-size: 24px;
}
</style>