@if ($paginator->hasPages())
    <p class="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <span class="disabled"><span>&laquo;</span></span>
        @else
            <span><a href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a></span>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <span class="disabled"><span>{{ $element }}</span></span>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <span class="active"><span>{{ $page }}</span></span>
                    @else
                        <span><a href="{{ $url }}">{{ $page }}</a></span>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <span><a href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a></span>
        @else
            <span class="disabled"><span>&raquo;</span></span>
        @endif
    </p>
@endif
