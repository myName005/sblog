@if ($paginator->hasPages())
    <div class="pagination">
        <div class="pagination-list"> 
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <span class="pagination-previous" disabled>&laquo;</span>
            @else
                <a class="pagination-previous" href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a>
            @endif

            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <span class="pagination-ellipsis" disabled><span>{{ $element }}</span></span>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <span  class="pagination-link" >{{ $page }}</span>
                        @else
                            <a href="{{ $url }}" class="pagination-link">{{ $page }}</a>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <a class="pagination-next" href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a>
            @else
                <span  class="pagination-next" disabled>&raquo;</span>
            @endif
        </div>
    </div>
@endif
